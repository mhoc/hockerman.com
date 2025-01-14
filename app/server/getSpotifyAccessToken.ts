import { get } from "@vercel/edge-config";
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
  const refreshTokenRecord = await get<{ refresh_token: string }>(
    `2pkxvc9fMW5IH-MsSdj-h`
  );
  if (!refreshTokenRecord) {
    throw new Error(
      `no edge config refresh token record found for userId=2pkxvc9fMW5IH-MsSdj-h`
    );
  }
  const authBody = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshTokenRecord.refresh_token,
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
