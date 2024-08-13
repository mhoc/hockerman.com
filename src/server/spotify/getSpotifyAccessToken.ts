import { MemoryCache } from "../lib/MemoryCache";
import { getSpotifyRefreshToken } from "./getSpotifyRefreshToken";

/**
 * This worker checks for this in the `Authorization: Basic` header. Obviously this is open source.
 * Its not meant to be secret, and nothing this API exposes isn't already available on
 * hockerman.com; its just a small mitigation for bots.
 */
// const KINDA_SECRET = "OxcnwUZBWMrwf_hQKMpJmmcXkNcf9ID3";

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
  const refresh_token = await getSpotifyRefreshToken();
  const authBody = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token,
  });
  const authHeader = btoa(
    `${import.meta.env.SPOTIFY_CLIENT_ID}:${
      import.meta.env.SPOTIFY_CLIENT_SECRET
    }`
  );
  const tokenResp = await fetch("https://accounts.spotify.com/api/token", {
    body: authBody,
    headers: {
      Authorization: `Basic ${authHeader}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });
  const responseAccessToken = ((await tokenResp.json()) as any).access_token;
  accessToken.set(responseAccessToken);
  return responseAccessToken;
}
