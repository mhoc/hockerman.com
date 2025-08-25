/* eslint-disable @typescript-eslint/no-explicit-any */

import { Spotify } from "../server/Spotify";
import { SpotifyTopArtistsCardItem } from "./SpotifyTopArtistsCardItem";

export async function SpotifyTopArtistsCard({ title, twindow }: { title: string; twindow: string }) {
  const response = await Spotify.topArtists(twindow);
  const { results } = await response.json();
  const maxDuration = results[0].total_duration_ms as number;
  return (
    <div className="flex flex-col gap-1">
      <span className="text-md text-slate-100 font-semibold">{title}</span>
      <table className="max-w-xs">
        <tbody>
          {results.map((result: any) => (
            <SpotifyTopArtistsCardItem
              artistId={result.artist_1_id}
              artistName={result.artist_1_name}
              duration={result.total_duration_ms}
              key={result.artist_1_name}
              maxDuration={maxDuration}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
