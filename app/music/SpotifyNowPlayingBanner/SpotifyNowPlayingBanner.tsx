import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

import getSpotifyCurrentlyPlaying from "../../_server/spotify/getSpotifyCurrentlyPlaying";
import { truncate } from "../../_util/truncate";

import styles from "./SpotifyNowPlayingBanner.module.css";

interface Props {}

export default async function SpotifyNowPlayingBanner({}: Props) {
  const { currentlyPlaying } = await getSpotifyCurrentlyPlaying();
  const trackName = truncate(currentlyPlaying?.item?.name, 40);
  const artist = truncate(currentlyPlaying?.item?.artists[0].name, 20);
  const album = truncate(currentlyPlaying?.item?.album?.name, 30);
  return (
    <div className={styles.container}>
      <div className={styles.spotifyIconContainer}>
        <FontAwesomeIcon
          className={styles.faicon}
          icon={faSpotify}
          style={{ height: "44px", width: "44px" }}
        />
      </div>
      <div className={styles.nowPlayingContainer}>
        <span className={styles.texth1}>{trackName}</span>
        <div className={styles.artistLine}>
          <span className={styles.textfaded}>by</span>
          <span className={styles.text} style={{ marginLeft: "8px" }}>
            {artist}
          </span>
          <span className={styles.textfaded} style={{ marginLeft: "8px" }}>
            on
          </span>
          <span className={styles.text} style={{ marginLeft: "8px" }}>
            {album}
          </span>
        </div>
      </div>
    </div>
  );
}
