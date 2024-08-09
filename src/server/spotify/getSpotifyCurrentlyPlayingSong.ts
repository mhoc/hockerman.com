import { getSpotifyAccessToken } from "./getSpotifyAccessToken";

export async function getSpotifyCurrentlyPlayingSong(): Promise<any> {
  const accessToken = await getSpotifyAccessToken();
  const currentlyPlayingResponse = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  if (currentlyPlayingResponse.status === 204) {
    return "";
  }
  return await currentlyPlayingResponse.json();
}
