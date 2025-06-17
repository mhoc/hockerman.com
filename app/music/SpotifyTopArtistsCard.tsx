/* eslint-disable @typescript-eslint/no-explicit-any */

import { LinearGauge } from "../components/LinearGauge/LinearGauge";

export async function SpotifyTopArtistsCard({ title, twindow }: { title: string; twindow: string }) {
  const response = await fetch(`https://spotify-bridge.hockerman.com/top_artists?window=${twindow}`, {
    headers: { "X-SECRET": "D8ci5xysFy9-WX8U" },
  });
  const { results } = await response.json();

  const maxPlays = results[0].plays as number;

  return (
    <div className="flex flex-col gap-1">
      <span className="text-lg text-gray-200 font-semibold">{title}</span>
      <table className="min-w-xs max-w-xs">
        <tbody>
          {results.map((result: any) => (
            <tr key={result.artist_1_name}>
              <td className="text-md text-gray-400">{result.artist_1_name}</td>
              <td>
                <LinearGauge value={result.plays / maxPlays} />
              </td>
              <td>
                <span className="text-md text-gray-400">{result.plays}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
