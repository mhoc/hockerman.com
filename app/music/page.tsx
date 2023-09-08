import { Suspense } from "react";

import BasePage from "../_components/BasePage/BasePage";

import styles from "./page.module.css";
import SpotifyAlbumCollage from "./SpotifyAlbumCollage";
import SpotifyNowPlayingBanner from "./SpotifyNowPlayingBanner";
import SpotifyRecentlyPlayedList from "./SpotifyRecentlyPlayedList";

export default async function Page() {
  return (
    <BasePage
      header="nvlc ./mp3s/"
      nav={[
        { label: "home", href: "/" },
        { label: "mike" },
        { label: "music" },
      ]}
    >
      <Suspense fallback={<div />}>
        <SpotifyAlbumCollage />
      </Suspense>
      <div className={styles.nowPlayingBannerContainer}>
        <Suspense fallback={<div />}>
          <SpotifyNowPlayingBanner />
        </Suspense>
      </div>
      <div className={styles.recentlyPlayedContainer}>
        <Suspense fallback={<div />}>
          <SpotifyRecentlyPlayedList />
        </Suspense>
      </div>
    </BasePage>
  );
}
