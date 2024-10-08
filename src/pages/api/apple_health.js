import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  "https://xyzcompany.supabase.co",
  "public-anon-key"
);

export async function POST({ request }) {
  const importToken = process.env.APPLE_HEALTH_IMPORT_TOKEN;
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
    console.log(`importing metric=${metric.name} (${metric.unit})`);
    for (const metricData of metric.data) {
      const value = metricData.qty;
      const at = new Date(metricData.date);
      console.log(`inserting ${metric.name}+${at.toISOString()}`);
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
