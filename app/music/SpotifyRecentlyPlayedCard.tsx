/* eslint-disable @typescript-eslint/no-explicit-any */

import { getSpotifyRecentlyPlayed } from "../server/getSpotifyRecentlyPlayed";

export async function SpotifyRecentlyPlayedCard() {
  const { items } = await getSpotifyRecentlyPlayed();
  return (
    <div className="flex flex-col gap-1">
      <span className="text-lg text-gray-200 font-semibold">Recently Played</span>
      <div className="flex flex-row gap-8 flex-wrap">
        <div className="flex flex-col gap-1">
          {items.slice(0, 4).map((item: any) => (
            <div className="flex flex-col" key={`${item.track.id}-${item.played_at}`}>
              <span className="text-md text-gray-300 leading-none">{item.track.name}</span>
              <span className="text-md text-gray-400 leading-none">{item.track.artists[0].name}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {items.slice(4, 8).map((item: any) => (
            <div className="flex flex-col" key={`${item.track.id}-${item.played_at}`}>
              <span className="text-md text-gray-300 leading-none">{item.track.name}</span>
              <span className="text-md text-gray-400 leading-none">{item.track.artists[0].name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
