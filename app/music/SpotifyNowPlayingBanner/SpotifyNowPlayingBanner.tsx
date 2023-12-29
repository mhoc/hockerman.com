import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

import { GlassCard } from "../../_components/GlassCard/GlassCard";
import getSpotifyCurrentlyPlaying from "../../_server/spotify/getSpotifyCurrentlyPlaying";
import { truncate } from "../../_util/truncate";

import styles from "./SpotifyNowPlayingBanner.module.css";

interface Props {}

export default async function SpotifyNowPlayingBanner({}: Props) {
  const { currentlyPlaying } = await getSpotifyCurrentlyPlaying();
  const trackName = truncate(currentlyPlaying?.item?.name, 40);
  const artist = truncate(currentlyPlaying?.item?.artists[0].name, 20);
  const album = truncate(currentlyPlaying?.item?.album?.name, 30);
  const trackProgress =
    currentlyPlaying?.progress_ms / currentlyPlaying?.item?.duration_ms;
  return (
    <GlassCard backgroundProgress={trackProgress}>
      <div className={styles.container}>
        <div className={styles.spotifyIconContainer}>
          <FontAwesomeIcon
            className={styles.faicon}
            icon={faSpotify}
            style={{ height: "32px", width: "32px" }}
          />
        </div>
        <div className={styles.nowPlayingContainer}>
          {currentlyPlaying && (
            <>
              <span className={styles.texth1}>{trackName}</span>
              <span className={styles.text}>{artist}</span>
              <span className={styles.text}>{album}</span>
            </>
          )}
          {!currentlyPlaying && (
            <span className={styles.text}>Playing Nothing</span>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
