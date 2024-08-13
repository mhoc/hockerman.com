import { getSpotifyAccessToken } from "./getSpotifyAccessToken";

export async function recent(): Promise<string> {
  const accessToken = await getSpotifyAccessToken();
  const recentlyPlayedResponse = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  const respBody = JSON.stringify(await recentlyPlayedResponse.json());
  return respBody;
}
