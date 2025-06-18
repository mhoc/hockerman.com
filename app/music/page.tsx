import { SpotifyAlbumWipeBackground } from "./SpotifyAlbumWipeBackground";
import { SpotifyNowPlayingHeader } from "./SpotifyNowPlayingHeader";
import { SpotifyRecentlyPlayedCard } from "./SpotifyRecentlyPlayedCard";
import { SpotifyTopArtistsCard } from "./SpotifyTopArtistsCard";
import { SpotifyTrendingSongsCard } from "./SpotifyTrendingSongsCard";

export default function Page() {
  return (
    <>
      <SpotifyAlbumWipeBackground />
      <div className="flex flex-col gap-8">
        <SpotifyNowPlayingHeader />
        <div className="flex flex-row flex-wrap gap-8">
          <SpotifyRecentlyPlayedCard />
          <SpotifyTrendingSongsCard />
        </div>
        <div className="flex flex-row flex-wrap gap-8">
          <SpotifyTopArtistsCard title="Past Week" twindow="-7 days" />
          <SpotifyTopArtistsCard title="Past Month" twindow="-30 days" />
          <SpotifyTopArtistsCard title="Past Year" twindow="-365 days" />
        </div>
      </div>
    </>
  );
}
