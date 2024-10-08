import { supabase } from "../../server/lib/Supabase";

export async function POST({ request }) {
  const importToken = import.meta.env.APPLE_HEALTH_IMPORT_TOKEN;
  if (!importToken) {
    return new Response("unauthorized", {
      status: 401,
    });
  }
  if (request.headers.get("X-TOKEN") !== importToken) {
    return new Response("unauthorized", {
      status: 401,
    });
  }

  const body = await request.json();
  for (const metric of body?.data?.metrics ?? []) {
    console.log(`importing metric=${metric.name} (unit=${metric.unit})`);
    for (const metricData of metric.data) {
      await importMetric(metric.name, metricData);
    }
  }

  return new Response("ok!", {
    status: 200,
  });
}

async function importMetric(metricName, metricData) {
  console.log(
    `inserting ${metricName}+${new Date(metricData.date).toISOString()} (${JSON.stringify(metricData)})`
  );
  switch (metricName) {
    case "heart_rate":
      await Promise.all([
        supabase.from("apple_health_metrics").upsert({
          at: new Date(metricData.date),
          metric: `heart_rate:avg`,
          value: metricData.Avg,
        }),
        supabase.from("apple_health_metrics").upsert({
          at: new Date(metricData.date),
          metric: `heart_rate:max`,
          value: metricData.Max,
        }),
        supabase.from("apple_health_metrics").upsert({
          at: new Date(metricData.date),
          metric: `heart_rate:min`,
          value: metricData.Min,
        }),
      ]);
      break;
    default:
      if (metricData.qty) {
        await supabase.from("apple_health_metrics").upsert({
          at: new Date(metricData.date),
          metric: metricName,
          value: metricData.qty,
        });
      }
      break;
  }
}
