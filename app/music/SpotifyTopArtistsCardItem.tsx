/* eslint-disable @next/next/no-img-element */

import { LinearGauge } from "../components/LinearGauge/LinearGauge";
import { Spotify } from "../server/Spotify";

export async function SpotifyTopArtistsCardItem({
  artistId,
  artistName,
  duration,
  maxDuration,
}: {
  artistId: string;
  artistName: string;
  duration: number;
  maxDuration: number;
}) {
  const artist = await Spotify.artist(artistId);
  const durationInMinutes = duration / 60000;
  return (
    <tr className="h-8">
      <td className="pr-2">
        <div className="flex flex-row items-center gap-2">
          {artist?.image_href && <img alt={artistName} className="w-5 h-5 rounded-full" src={artist?.image_href} />}
          <span className="text-sm text-cobalt-400">{artistName}</span>
        </div>
      </td>
      <td className="pr-2">
        <LinearGauge value={duration / maxDuration} />
      </td>
      <td>
        <span className="text-sm text-cobalt-400">{durationInMinutes.toFixed(0)} min</span>
      </td>
    </tr>
  );
}
