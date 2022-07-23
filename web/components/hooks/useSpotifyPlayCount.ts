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

export const useSpotifyPlayCount = (sinceHours: number): SpotifyPlayCountState => {
  const [ state, setState ] = useState<SpotifyPlayCountState>({ state: "loading" });
  useEffect(() => {
    setState({ state: "loading" });
    fetch(`/api/spotify/stats/playCount?sinceHours=${sinceHours}`)
      .then(r => r.json())
      .then((result) => {
        setState({
          state: "results",
          playCount: result.playCount,
        });
      });
  }, [ sinceHours ]);
  return state;
}
