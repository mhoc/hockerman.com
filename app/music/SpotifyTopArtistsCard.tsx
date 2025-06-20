/* eslint-disable @typescript-eslint/no-explicit-any */

import { SpotifyTopArtistsCardItem } from "./SpotifyTopArtistsCardItem";

export async function SpotifyTopArtistsCard({ title, twindow }: { title: string; twindow: string }) {
  const response = await fetch(`https://spotify-bridge.hockerman.com/top_artists?window=${twindow}`, {
    headers: { "X-SECRET": "D8ci5xysFy9-WX8U" },
  });
  const { results } = await response.json();
  const maxPlays = results[0].plays as number;

  return (
    <div className="flex flex-col gap-1">
      <span className="text-lg text-gray-100 font-semibold">{title}</span>
      <table className="min-w-xs max-w-xs">
        <tbody>
          {results.map((result: any) => (
            <SpotifyTopArtistsCardItem
              artistId={result.artist_1_id}
              artistName={result.artist_1_name}
              key={result.artist_1_name}
              maxPlays={maxPlays}
              plays={result.plays}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
