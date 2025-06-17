/* eslint-disable @typescript-eslint/no-explicit-any */

import { IoTrendingUp } from "react-icons/io5";

export async function SpotifyTrendingSongsCard() {
  const response = await fetch(`https://spotify-bridge.hockerman.com/trending_songs`, {
    headers: { "X-SECRET": "D8ci5xysFy9-WX8U" },
  });
  const { results } = await response.json();

  console.log(results);

  return (
    <div className="flex flex-col">
      <span className="text-lg text-gray-200 font-semibold">Trending</span>
      {results.slice(0, 4).map((result: any) => (
        <div className="flex flex-row gap-2 items-center" key={`${result.track_name}-${result.artist_1_name}`}>
          <IoTrendingUp className="text-emerald-400" />
          <span className="text-md text-gray-300">{result.track_name} </span>
          <span className="text-md text-gray-400">- {result.artist_1_name}</span>
        </div>
      ))}
    </div>
  );
}
