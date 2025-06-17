import { SpotifyNowPlayingHeader } from "./SpotifyNowPlayingHeader";
import { SpotifyRecentlyPlayedCard } from "./SpotifyRecentlyPlayedCard";
import { SpotifyTopArtistsCard } from "./SpotifyTopArtistsCard";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <SpotifyNowPlayingHeader />
      <SpotifyRecentlyPlayedCard />
      <div className="flex flex-row flex-wrap gap-8">
        <SpotifyTopArtistsCard title="Past Year" twindow="-365 days" />
        <SpotifyTopArtistsCard title="Past Month" twindow="-30 days" />
        <SpotifyTopArtistsCard title="Past Week" twindow="-7 days" />
      </div>
    </div>
  );
}
