import getSpotifyAccessToken from "./getSpotifyAccessToken";

interface CurrentlyPlayingOutput {
  currentlyPlaying: any;
}

export default async function getSpotifyCurrentlyPlaying(): Promise<CurrentlyPlayingOutput> {
  const accessToken = await getSpotifyAccessToken();
  const currentlyPlayingResponse = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 15 },
    }
  );
  if (currentlyPlayingResponse.status === 204) {
    return { currentlyPlaying: undefined };
  }
  return { currentlyPlaying: await currentlyPlayingResponse.json() };
}
