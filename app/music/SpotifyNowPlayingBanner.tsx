import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

import Link from "../_components/Link/Link";
import Text from "../_components/Text/Text";
import getSpotifyCurrentlyPlaying from "../_server/spotify/getSpotifyCurrentlyPlaying";
import { truncate } from "../_util/truncate";

import styles from "./SpotifyNowPlayingBanner.module.css";

interface Props {}

export default async function SpotifyNowPlayingBanner({}: Props) {
  const { currentlyPlaying } = await getSpotifyCurrentlyPlaying();

  return (
    <div className={styles.container}>
      <div className={styles.songTitle}>
        <div className={styles.spotifyIconContainer}>
          <Text>
            <FontAwesomeIcon
              icon={faSpotify}
              style={{ height: "20px", width: "20px" }}
            />
          </Text>
        </div>
        &nbsp;
        {!currentlyPlaying && (
          <Text color="muted">Now Playing: Nothing :)</Text>
        )}
        {currentlyPlaying && (
          <Link
            href={`https://open.spotify.com/track/${currentlyPlaying.item.id}`}
            rel="noopener"
            target="_blank"
          >
            {truncate(currentlyPlaying.item.name, 40)}
          </Link>
        )}
        &nbsp;
      </div>
      <div>
        {currentlyPlaying && (
          <span>
            <Text color="muted">by</Text>&nbsp;
            <Link
              href={`https://open.spotify.com/artist/${currentlyPlaying.item.artists[0].id}`}
              rel="noopener"
              target="_blank"
            >
              {truncate(currentlyPlaying.item.artists[0].name, 20)}
            </Link>
          </span>
        )}
        &nbsp;
      </div>
      <div>
        {currentlyPlaying &&
          currentlyPlaying.item.album.name !== currentlyPlaying.item.name && (
            <span>
              <Text color="muted">on</Text>&nbsp;
              <Link
                href={`https://open.spotify.com/album/${currentlyPlaying.item.album.id}`}
                rel="noopener"
                target="_blank"
              >
                {truncate(currentlyPlaying.item.album.name, 30)}
              </Link>
              &nbsp;
            </span>
          )}
      </div>
    </div>
  );
}
