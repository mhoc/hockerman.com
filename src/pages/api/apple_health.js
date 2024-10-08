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
      const value = metricData.qty;
      const at = new Date(metricData.date);
      console.log(
        `inserting ${metric.name}+${at.toISOString()} (${JSON.stringify(metricData)})`
      );
      await supabase.from("apple_health_metrics").upsert({
        at,
        metric: metric.name,
        value,
      });
    }
  }

  return new Response("ok!", {
    status: 200,
  });
}
