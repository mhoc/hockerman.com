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
  console.log(body);

  return new Response("ok!", {
    status: 200,
  });
}
