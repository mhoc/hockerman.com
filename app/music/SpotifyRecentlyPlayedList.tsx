import intlFormatDistance from "date-fns/intlFormatDistance";

import Link from "../_components/Link/Link";
import Text from "../_components/Text/Text";

import styles from "./SpotifyRecentlyPlayedList.module.css";
import SpotifyApplication from "../_server/spotify/SpotifyApplication";
import SpotifyUsers from "../_server/spotify/SpotifyUsers";

const MIKES_USER_ID_NOT_SECRET_NO_HACKERINO = "2pkxvc9fMW5IH-MsSdj-h";

interface Props {}

export default async function SpotifyRecentlyPlayedList({}: Props) {
  const spotifyApp = new SpotifyApplication();
  const spotifyUsers = new SpotifyUsers();
  const user = await spotifyUsers.getById(
    MIKES_USER_ID_NOT_SECRET_NO_HACKERINO
  );
  const spotifyClient = await spotifyApp.clientFromRefreshToken(
    user.refresh_token!
  );
  const { recentPlays } = await spotifyClient.recentlyPlayed();

  return (
    <div>
      {recentPlays.slice(0, 4).map((rp) => (
        <div
          className={styles.recentlyPlayedItem}
          key={`spotify-recently-played-item-${rp.track}`}
        >
          <Text color="muted">
            <span className={styles.recentlyPlayedWhen}>
              [
              {intlFormatDistance(new Date(rp.played_at), new Date(), {
                style: "long",
              })}
              ]&nbsp;
            </span>
            {rp.track.name} - {rp.track.artists[0].name}
          </Text>
          &nbsp;
          <Link
            hideUnderline
            href={`https://open.spotify.com/album/${rp.track.album.id}`}
            target="_blank"
          >
            {">"}
          </Link>
        </div>
      ))}
    </div>
  );
}
