import getSpotifyAccessToken from "./getSpotifyAccessToken";

interface TopTracksOutput {
  topTracks: any;
}

export default async function getSpotifyTopTracks(): Promise<TopTracksOutput> {
  const accessToken = await getSpotifyAccessToken();
  const topTracksResponse = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 3600 },
    }
  );
  return { topTracks: await topTracksResponse.json() };
}
