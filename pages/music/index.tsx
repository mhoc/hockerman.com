import React from "react";

import BasePage from "../../components/BasePage";
import { SpotifyNowPlayingBanner } from "../../components/spotify/SpotifyNowPlayingBanner";
import { SpotifyRecentlyPlayedList } from "../../components/spotify/SpotifyRecentlyPlayedList";

const MusicPage = () => {
  return (
    <>
      <BasePage header="ffplay ./mp3s/" nav={[{label:"home", href:"/"},{label:"music"}]}>
        <div className="now-playing-banner-container">
          <SpotifyNowPlayingBanner />
        </div>
        <SpotifyRecentlyPlayedList />
      </BasePage>
      <style jsx>{`
        .now-playing-banner-container {
          align-items: center;
          display: flex;
          min-height: 35px;
          padding-bottom: 4px;
        }
      `}</style>
    </>
  );
}

export default MusicPage;
