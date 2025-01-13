import { MemoryCache } from "./MemoryCache";

/** Local cache for the spotify access token */
const accessToken = new MemoryCache<string>(3500);

/**
 * `getSpotifyAccessToken` fetches and returns an access token for accessing the spotify api.
 * @returns
 */
export async function getSpotifyAccessToken(): Promise<string> {
  const cachedAccessToken = accessToken.get();
  if (cachedAccessToken) {
    return cachedAccessToken;
  }
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!refresh_token) {
    throw new Error("SPOTIFY_REFRESH_TOKEN is undefined");
  }
  const authBody = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token,
  });
  const authHeader = btoa(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  );
  const tokenResp = await fetch("https://accounts.spotify.com/api/token", {
    body: authBody,
    headers: {
      Authorization: `Basic ${authHeader}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });
  const responseAccessToken = (await tokenResp.json()).access_token;
  accessToken.set(responseAccessToken);
  return responseAccessToken;
}
