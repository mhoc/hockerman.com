import { useEffect, useState } from "react";

interface UseSpotifyPlayCountInput {
  sinceHours: number;
}

type SpotifyPlayCountState = SpotifyPlayCountStateLoading
  | SpotifyPlayCountStateError
  | SpotifyPlayCountStateResults;

interface SpotifyPlayCountStateLoading {
  state: "loading";
}

interface SpotifyPlayCountStateError {
  state: "error";
  error: string;
}

interface SpotifyPlayCountStateResults {
  state: "results";
  playCount: number;
}

export const useSpotifyPlayCount = (input: UseSpotifyPlayCountInput): SpotifyPlayCountState => {
  const { sinceHours } = input;
  const [ state, setState ] = useState<SpotifyPlayCountState>({ state: "loading" });
  useEffect(() => {
    fetch(`/api/spotify/stats/playCount?sinceHours=${sinceHours}`)
      .then(r => r.json())
      .then((result) => {
        setTimeout(() => {
          setState({
            state: "results",
            playCount: result.playCount,
          });
        }, 1000);
      });
  }, []);
  return state;
}
