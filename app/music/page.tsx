import { Suspense } from "react";

import styles from "./page.module.css";
import SpotifyAlbumCollage from "./SpotifyAlbumCollage/SpotifyAlbumCollage";
import SpotifyNowPlayingBanner from "./SpotifyNowPlayingBanner/SpotifyNowPlayingBanner";
import SpotifyRecentlyPlayedList from "./SpotifyRecentlyPlayedList/SpotifyRecentlyPlayedList";

export default async function Page() {
  return (
    <div className={styles.container}>
      <Suspense fallback={<div />}>
        <SpotifyAlbumCollage />
        <SpotifyNowPlayingBanner />
        <div style={{ minHeight: "24px" }} />
        <SpotifyRecentlyPlayedList />
      </Suspense>
    </div>
  );
}
