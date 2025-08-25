/* eslint-disable @typescript-eslint/no-explicit-any */

import { IoTime } from "react-icons/io5";
import { Spotify } from "../server/Spotify";

export async function SpotifyRecentlyPlayedCard() {
  const { items } = await Spotify.recentlyPlayed();
  return (
    <div className="flex flex-col gap-1">
      <span className="text-md text-cobalt-100 font-semibold">Recently Played</span>
      <div className="flex flex-row gap-8 flex-wrap">
        <div className="flex flex-col gap-1">
          {items.slice(0, 4).map((item: any) => (
            <div className="flex flex-row gap-2 items-center" key={`${item.track.id}-${item.played_at}`}>
              <IoTime className="text-emerald-400" />
              <div className="flex flex-col">
                <span className="text-sm text-cobalt-300 leading-none">{item.track.name}</span>
                <span className="text-sm text-cobalt-500 leading-none">{item.track.artists[0].name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {items.slice(4, 8).map((item: any) => (
            <div className="flex flex-row gap-2 items-center" key={`${item.track.id}-${item.played_at}`}>
              <IoTime className="text-emerald-400" />
              <div className="flex flex-col">
                <span className="text-sm text-cobalt-300 leading-none">{item.track.name}</span>
                <span className="text-sm text-cobalt-500 leading-none">{item.track.artists[0].name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
