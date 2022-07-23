import React from "react";

import BasePage from "../../components/BasePage";
import { useSpotifyNowPlaying } from "../../components/hooks/useSpotifyNowPlaying";
import { useSpotifyRecentlyPlayed } from "../../components/hooks/useSpotifyRecentlyPlayed";
import { SpotifyAlbumCollage } from "../../components/spotify/SpotifyAlbumCollage";
import { SpotifyBroadStats } from "../../components/spotify/SpotifyBroadStats";
import { SpotifyNowPlayingBanner } from "../../components/spotify/SpotifyNowPlayingBanner";
import { SpotifyRecentlyPlayedList } from "../../components/spotify/SpotifyRecentlyPlayedList";

import colors from "../../styles/colors";

const MusicPage = () => {
  const snp = useSpotifyNowPlaying();
  const srp = useSpotifyRecentlyPlayed();
  return (
    <>
      <BasePage header="ffplay ./mp3s/" nav={[{ label:"home", href:"/" }, { label: "mike" }, { label:"music" }]}>
        <SpotifyAlbumCollage snp={snp} srp={srp} />
        <div className="now-playing-banner-container">
          <SpotifyNowPlayingBanner snp={snp} />
        </div>
        <div className="recently-played-container">
          <SpotifyRecentlyPlayedList srp={srp} />
        </div>
        <div className="rule" />
        <div className="stats-container">
          <SpotifyBroadStats />
        </div>
      </BasePage>
      <style jsx>{`
        .now-playing-banner-container {
          align-items: center;
          display: flex;
          min-height: 35px;
          padding-bottom: 4px;
        }
        .recently-played-container {
        
        }
        .rule {
          background-color: ${colors.deemphasize};
          margin: 32px 256px 32px 0px;
          height: 1px;
        }
        .stats-container {

        }
      `}</style>
    </>
  );
}

export default MusicPage;
