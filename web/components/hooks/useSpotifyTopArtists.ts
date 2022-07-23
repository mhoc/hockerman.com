import { useEffect, useState } from "react";

type SpotifyTopArtistsState = SpotifyTopArtistsStateLoading
  | SpotifyTopArtistsStateError
  | SpotifyTopArtistsStateResult;

interface SpotifyTopArtistsStateLoading {
  state: "loading";
}

interface SpotifyTopArtistsStateError {
  state: "error";
  error: string;
}

interface SpotifyTopArtistsStateResult {
  state: "results";
  topArtists: string[];
}

export const useSpotifyTopArtists = (sinceHours: number): SpotifyTopArtistsState => {
  const [ state, setState ] = useState<SpotifyTopArtistsState>({ state: "loading" });
  useEffect(() => {
    setState({ state: "loading" });
    fetch(`/api/spotify/stats/topArtists?count=3&sinceHours=${sinceHours}`)
      .then(r => r.json())
      .then((stats) => {
        setState({
          state: "results",
          topArtists: stats.topArtists,
        });
      });
  }, [ sinceHours ]);
  return state;
}
