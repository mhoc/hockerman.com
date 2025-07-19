/* eslint-disable @typescript-eslint/no-explicit-any */

import { IoTrendingUp } from "react-icons/io5";
import { Spotify } from "../server/Spotify";

export async function SpotifyTrendingSongsCard() {
  const response = await Spotify.trendingSongs();
  const { results } = await response.json();
  return (
    <div className="flex flex-col">
      <span className="text-lg text-gray-100 font-semibold">Trending</span>
      {results.length === 0 && <span className="text-md text-gray-400">No trending songs</span>}
      {results.slice(0, 4).map((result: any) => (
        <div className="flex flex-row gap-2 items-center" key={`${result.track_name}-${result.artist_1_name}`}>
          <IoTrendingUp className="text-emerald-400" />
          <span className="text-md text-gray-300">{result.track_name} </span>
          <span className="text-md text-gray-500">&nbsp;{result.artist_1_name}</span>
        </div>
      ))}
    </div>
  );
}
