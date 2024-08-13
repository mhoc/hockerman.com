import { MemoryCache } from "../lib/MemoryCache";
import { getSpotifyAccessToken } from "./getSpotifyAccessToken";

type GetSpotifyCurrentlyPlayingSongOutput =
  | GetSpotifyCurrentlyPlayingSongOutputNone
  | GetSpotifyCurrentlyPlayingSongOutputResult;

type GetSpotifyCurrentlyPlayingSongOutputNone = {
  item: "none";
};

type GetSpotifyCurrentlyPlayingSongOutputResult = {
  item: {
    album: {
      name: string;
    };
    artists: {
      name: string;
    }[];
    name: string;
  };
};

let cache = new MemoryCache<string>(30);

export async function getSpotifyCurrentlyPlayingSong(): Promise<GetSpotifyCurrentlyPlayingSongOutput> {
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
    let resp = { item: "none" as const };
    cache.set(JSON.stringify(resp));
    return resp;
  } else {
    const response = await currentlyPlayingResponse.text();
    cache.set(response);
    return JSON.parse(response);
  }
}
