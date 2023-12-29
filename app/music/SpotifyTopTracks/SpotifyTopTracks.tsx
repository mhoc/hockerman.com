import { Badge } from "../../_components/Badge/Badge";
import { GlassCard } from "../../_components/GlassCard/GlassCard";
import getSpotifyTopTracks from "../../_server/spotify/getSpotifyTopTracks";

import styles from "./SpotifyTopTracks.module.css";

interface Props {}

export default async function SpotifyTopTracks({}: Props) {
  const { topTracks } = await getSpotifyTopTracks();
  return (
    <GlassCard title="Top Tracks" subtitle="Past Month">
      <div className={styles.topTracksList}>
        {topTracks.items.slice(0, 4).map((topTrack) => (
          <Badge
            key={topTrack.name}
            label={`${topTrack.name} - ${topTrack.artists[0].name}`}
          />
        ))}
      </div>
    </GlassCard>
  );
}
