export interface Env {
  KV_HOCKERMAN_COM_SPOTIFY: KVNamespace;
  SPOTIFY_CLIENT_ID: string;
  SPOTIFY_CLIENT_SECRET: string;
}

// This worker checks for this in the `Authorization: Basic` header. Obviously this is open source.
// Its not meant to be secret, and nothing this API exposes isn't already available on
// hockerman.com; its just a small mitigation for bots and such.
const KINDA_SECRET = "OxcnwUZBWMrwf_hQKMpJmmcXkNcf9ID3";
const SPOTIFY_USER_ID = "2pkxvc9fMW5IH-MsSdj-h";

const CORS_HEADERS = {
  "Access-Control-Allow-Headers": "Authorization",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Origin": "*",
};

async function getSpotifyAccessToken(env: Env): Promise<string> {
  const cachedAccessToken = await env.KV_HOCKERMAN_COM_SPOTIFY.get(
    `access_token:${SPOTIFY_USER_ID}`
  );
  if (cachedAccessToken) {
    return cachedAccessToken;
  }
  const refresh_token = await env.KV_HOCKERMAN_COM_SPOTIFY.get(
    `refresh:${SPOTIFY_USER_ID}`
  );
  if (!refresh_token) {
    throw new Error(`no refresh token for '${SPOTIFY_USER_ID}'`);
  }
  const authBody = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token,
  });
  const authHeader = btoa(
    `${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`
  );
  const tokenResp = await fetch("https://accounts.spotify.com/api/token", {
    body: authBody,
    headers: {
      Authorization: `Basic ${authHeader}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });
  const accessToken = ((await tokenResp.json()) as any).access_token;
  await env.KV_HOCKERMAN_COM_SPOTIFY.put(
    `access_token:${SPOTIFY_USER_ID}`,
    accessToken,
    {
      expirationTtl: 3500,
    }
  );
  return accessToken;
}

async function current(env: Env): Promise<string> {
  const cacheHit = await env.KV_HOCKERMAN_COM_SPOTIFY.get(
    `current:${SPOTIFY_USER_ID}`
  );
  if (cacheHit) {
    return cacheHit;
  }
  const accessToken = await getSpotifyAccessToken(env);
  const currentlyPlayingResponse = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  if (currentlyPlayingResponse.status === 204) {
    return "";
  }
  const respBody = JSON.stringify(await currentlyPlayingResponse.json());
  await env.KV_HOCKERMAN_COM_SPOTIFY.put(
    `current:${SPOTIFY_USER_ID}`,
    respBody,
    { expirationTtl: 60 }
  );
  return respBody;
}

async function recent(env: Env): Promise<string> {
  const cacheHit = await env.KV_HOCKERMAN_COM_SPOTIFY.get(
    `recent:${SPOTIFY_USER_ID}`
  );
  if (cacheHit) {
    return cacheHit;
  }
  const accessToken = await getSpotifyAccessToken(env);
  const recentlyPlayedResponse = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  const respBody = JSON.stringify(await recentlyPlayedResponse.json());
  await env.KV_HOCKERMAN_COM_SPOTIFY.put(
    `recent:${SPOTIFY_USER_ID}`,
    respBody,
    { expirationTtl: 120 }
  );
  return respBody;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response("OK", {
        headers: CORS_HEADERS,
      });
    }
    if (request.method !== "GET") {
      return new Response("Not Found", {
        status: 404,
      });
    }
    const authHeader = request.headers.get("Authorization")?.split(" ");
    if (
      authHeader?.length !== 2 ||
      authHeader[0] !== "Basic" ||
      authHeader[1] !== KINDA_SECRET
    ) {
      return new Response("Unauthorized", { status: 401 });
    }
    const url = new URL(request.url);
    switch (url.pathname) {
      case "/current":
        const rCurrent = await current(env);
        if (rCurrent === "") {
          return new Response(rCurrent, { headers: CORS_HEADERS, status: 204 });
        }
        return new Response(rCurrent, { headers: CORS_HEADERS, status: 200 });
      case "/recent":
        const rRecent = await recent(env);
        return new Response(rRecent, { headers: CORS_HEADERS, status: 200 });
    }
    return new Response("Not Found", { status: 404 });
  },
};
