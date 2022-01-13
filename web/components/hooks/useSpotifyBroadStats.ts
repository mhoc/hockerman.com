import { useEffect, useState } from "react";

type SpotifyBroadStatsResult = SpotifyBroadStatsResultLoading
  | SpotifyBroadStatsResultError
  | SpotifyBroadStatsResultWithStats;

interface SpotifyBroadStatsResultLoading {
  state: "loading";
}

interface SpotifyBroadStatsResultError {
  state: "error";
  error: string;
}

interface SpotifyBroadStatsResultWithStats {
  state: "results";
  playsInLast24Hours: number;
  topArtistsInLastWeek: string[];
}

export const useSpotifyBroadStats = (): SpotifyBroadStatsResult => {
  const [ stats, setStats ] = useState<SpotifyBroadStatsResult>({ state: "loading" });
  useEffect(() => {
    fetch("/api/spotify/stats/broad")
      .then(r => r.json())
      .then((stats) => {
        setStats({
          state: "results",
          playsInLast24Hours: stats.playsInLast24Hours,
          topArtistsInLastWeek: stats.topArtistsInLastWeek,
        });
      });
  }, []);
  return stats;
}
