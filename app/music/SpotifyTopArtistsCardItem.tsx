/* eslint-disable @next/next/no-img-element */

import { LinearGauge } from "../components/LinearGauge/LinearGauge";
import { getSpotifyArtist } from "../server/getSpotifyArtist";

export async function SpotifyTopArtistsCardItem({
  artistId,
  artistName,
  maxPlays,
  plays,
}: {
  artistId: string;
  artistName: string;
  maxPlays: number;
  plays: number;
}) {
  const artist = await getSpotifyArtist(artistId);
  return (
    <tr className="h-8">
      <td>
        <div className="flex flex-row items-center gap-2">
          {artist?.image_href && <img alt={artistName} className="w-5 h-5 rounded-full" src={artist?.image_href} />}
          <span className="text-md text-gray-400">{artistName}</span>
        </div>
      </td>
      <td>
        <LinearGauge value={plays / maxPlays} />
      </td>
      <td>
        <span className="text-md text-gray-400">{plays}</span>
      </td>
    </tr>
  );
}
