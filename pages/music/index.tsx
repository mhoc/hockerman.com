import React from "react";

import BasePage from "../../components/BasePage";
import { SpotifyNowPlayingBanner } from "../../components/spotify/SpotifyNowPlayingBanner";
import { SpotifyRecentlyPlayedList } from "../../components/spotify/SpotifyRecentlyPlayedList";

const MusicPage = () => {
  return (
    <BasePage header="ffplay ./mp3s/" nav={[{label:"home", href:"/"},{label:"music"}]}>
      <SpotifyNowPlayingBanner />
      <SpotifyRecentlyPlayedList />
    </BasePage>
  );
}

export default MusicPage;
