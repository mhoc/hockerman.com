import { getSpotifyAccessToken } from "./getSpotifyAccessToken";

export async function getSpotifyRecentlyPlayed(): Promise<any> {
  const accessToken = await getSpotifyAccessToken();
  const recentlyPlayedResponse = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return await recentlyPlayedResponse.json();
}
