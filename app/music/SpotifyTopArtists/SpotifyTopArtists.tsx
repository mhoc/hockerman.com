import { Badge } from "../../_components/Badge/Badge";
import { GlassCard } from "../../_components/GlassCard/GlassCard";
import getSpotifyTopArtists from "../../_server/spotify/getSpotifyTopArtists";

import styles from "./SpotifyTopArtists.module.css";

interface Props {}

export default async function SpotifyTopArtists({}: Props) {
  const { topArtists } = await getSpotifyTopArtists();
  return (
    <GlassCard title="Top Artists (Past Month)">
      <div className={styles.topArtistsList}>
        {topArtists.items.slice(0, 4).map((topArtist) => (
          <Badge label={topArtist.name} />
        ))}
      </div>
    </GlassCard>
  );
}
