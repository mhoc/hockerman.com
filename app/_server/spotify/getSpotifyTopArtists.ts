import getSpotifyAccessToken from "./getSpotifyAccessToken";

interface TopArtistsOutput {
  topArtists: any;
}

export default async function getSpotifyTopArtists(): Promise<TopArtistsOutput> {
  const accessToken = await getSpotifyAccessToken();
  const currentlyPlayingResponse = await fetch(
    "https://api.spotify.com/v1/me/top/artists?time_range=short_term",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 3600 },
    }
  );
  return { topArtists: await currentlyPlayingResponse.json() };
}
