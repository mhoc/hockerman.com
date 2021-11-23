import React from "react";

import BasePage from "../../components/BasePage";
import { SpotifyNowPlayingBanner } from "../../components/spotify/SpotifyNowPlayingBanner";

const MusicPage = () => {
  return (
    <BasePage header="ffplay ./mp3s/" nav={[{label:"home", href:"/"},{label:"music"}]}>
      <SpotifyNowPlayingBanner />
    </BasePage>
  );
}

export default MusicPage;
