import { Suspense } from "react";

import styles from "./page.module.css";
import SpotifyAlbumCollage from "./SpotifyAlbumCollage/SpotifyAlbumCollage";
import SpotifyNowPlayingBanner from "./SpotifyNowPlayingBanner/SpotifyNowPlayingBanner";
import SpotifyRecentlyPlayedList from "./SpotifyRecentlyPlayedList/SpotifyRecentlyPlayedList";
import SpotifyTopArtists from "./SpotifyTopArtists/SpotifyTopArtists";

export default async function Page() {
  return (
    <div className={styles.container}>
      <Suspense fallback={<div />}>
        <SpotifyAlbumCollage />
        <SpotifyNowPlayingBanner />
        <div style={{ minHeight: "24px" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <SpotifyRecentlyPlayedList />
          <SpotifyTopArtists />
        </div>
      </Suspense>
    </div>
  );
}
