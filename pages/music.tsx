import BasePage from "../components/BasePage";
import { useSpotifyNowPlaying } from "../components/hooks/useSpotifyNowPlaying";
import { useSpotifyRecentlyPlayed } from "../components/hooks/useSpotifyRecentlyPlayed";
import { SpotifyAlbumCollage } from "../components/spotify/SpotifyAlbumCollage";
import { SpotifyNowPlayingBanner } from "../components/spotify/SpotifyNowPlayingBanner";
import { SpotifyRecentlyPlayedList } from "../components/spotify/SpotifyRecentlyPlayedList";

const MusicPage = () => {
  const snp = useSpotifyNowPlaying();
  const srp = useSpotifyRecentlyPlayed();
  return (
    <>
      <BasePage
        header="nvlc ./mp3s/"
        nav={[
          { label: "home", href: "/" },
          { label: "mike" },
          { label: "music" },
        ]}
      >
        <SpotifyAlbumCollage snp={snp} srp={srp} />
        <div className="now-playing-banner-container">
          <SpotifyNowPlayingBanner snp={snp} />
        </div>
        <div className="recently-played-container">
          <SpotifyRecentlyPlayedList srp={srp} />
        </div>
      </BasePage>
      <style jsx>{`
        .now-playing-banner-container {
          align-items: center;
          display: flex;
          min-height: 35px;
          padding-bottom: 12px;
        }
        .recently-played-container {
        }
      `}</style>
    </>
  );
};

export default MusicPage;
