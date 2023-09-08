import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { truncate } from "lodash";

import Link from "../_components/Link/Link";
import Text from "../_components/Text/Text";
import SpotifyApplication from "../_server/spotify/SpotifyApplication";
import SpotifyUsers from "../_server/spotify/SpotifyUsers";

import styles from "./SpotifyNowPlayingBanner.module.css";

const MIKES_USER_ID_NOT_SECRET_NO_HACKERINO = "2pkxvc9fMW5IH-MsSdj-h";

interface Props {}

export default async function SpotifyNowPlayingBanner({}: Props) {
  const spotifyApp = new SpotifyApplication();
  const spotifyUsers = new SpotifyUsers();
  const user = await spotifyUsers.getById(
    MIKES_USER_ID_NOT_SECRET_NO_HACKERINO
  );
  const spotifyClient = await spotifyApp.clientFromRefreshToken(
    user.refresh_token!
  );

  const { currentlyPlaying } = await spotifyClient.currentlyPlaying();

  return (
    <div className={styles.container}>
      <div className={styles.songTitle}>
        <Text>
          <div className={styles.spotifyIcon}>
            <FontAwesomeIcon icon={faSpotify} />
          </div>
        </Text>
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
            {truncate(currentlyPlaying.item.name, { length: 40 })}
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
              {truncate(currentlyPlaying.item.artists[0].name, { length: 20 })}
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
                {truncate(currentlyPlaying.item.album.name, { length: 30 })}
              </Link>
              &nbsp;
            </span>
          )}
      </div>
    </div>
  );
}
