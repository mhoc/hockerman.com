import { SpotifyNowPlayingHeader } from "./SpotifyNowPlayingHeader";
import { SpotifyRecentlyPlayedCard } from "./SpotifyRecentlyPlayedCard";
import { SpotifyTopArtistsCard } from "./SpotifyTopArtistsCard";
import { SpotifyTrendingSongsCard } from "./SpotifyTrendingSongsCard";

export default function Page() {
  return (
    <div className="flex flex-col h-full p-4 md:p-16 gap-8">
      <SpotifyNowPlayingHeader />
      <div className="flex flex-col flex-wrap gap-8">
        <SpotifyRecentlyPlayedCard />
        <SpotifyTrendingSongsCard />
      </div>
      <div className="flex flex-col flex-wrap gap-8">
        <SpotifyTopArtistsCard title="Past Week" twindow="-7 days" />
        <SpotifyTopArtistsCard title="Past Month" twindow="-30 days" />
        <SpotifyTopArtistsCard title="Past Year" twindow="-365 days" />
      </div>
    </div>
  );
}
