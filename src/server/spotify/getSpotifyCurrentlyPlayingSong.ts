import { MemoryCache } from "../lib/MemoryCache";
import { getSpotifyAccessToken } from "./getSpotifyAccessToken";

let cache = new MemoryCache<string>(30);

export async function getSpotifyCurrentlyPlayingSong(): Promise<any> {
  const cachedCurrentlyPlayingResponse = cache.get();
  if (cachedCurrentlyPlayingResponse) {
    return JSON.parse(cachedCurrentlyPlayingResponse);
  }
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
  const response = await currentlyPlayingResponse.text();
  return JSON.parse(response);
}
