import { intlFormatDistance } from "date-fns";

import getSpotifyRecentlyPlayed from "../_server/spotify/getSpotifyRecentlyPlayed";

import styles from "./SpotifyRecentlyPlayedList.module.css";

interface Props {}

export default async function SpotifyRecentlyPlayedList({}: Props) {
  const { recentPlays } = await getSpotifyRecentlyPlayed();
  return (
    <div className={styles.container}>
      {recentPlays.slice(0, 5).map((rp) => (
        <div
          className={styles.recentlyPlayedItem}
          key={`spotify-recently-played-item-${rp.track}`}
        >
          <span style={{ color: "#28323E" }}>
            <span className={styles.recentlyPlayedWhen}>
              [
              {intlFormatDistance(new Date(rp.played_at), new Date(), {
                style: "long",
              })}
              ]&nbsp;
            </span>
            {rp.track.name} - {rp.track.artists[0].name}
          </span>
        </div>
      ))}
    </div>
  );
}
