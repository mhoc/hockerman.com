import getSpotifyAccessToken from "./getSpotifyAccessToken";

interface RecentlyPlayedOutput {
  recentPlays: {
    context: {};
    played_at: string;
    track: {
      artists: {
        href: string;
        id: string;
        name: string;
      }[];
      album: {
        name: string;
        id: string;
        images: {
          url: string;
        }[];
      };
      id: string;
      href: string;
      name: string;
      duration_ms: number;
    };
  }[];
}

export default async function getSpotifyRecentlyPlayed(): Promise<RecentlyPlayedOutput> {
  const accessToken = await getSpotifyAccessToken();
  const recentlyPlayedResp = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 60 },
    }
  );
  const { items } = await recentlyPlayedResp.json();
  return { recentPlays: items };
}
