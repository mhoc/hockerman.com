import { useEffect, useState } from "react";

export type SpotifyRecentlyPlayedHookResult = SpotifyRecentlyPlayedHookResultLoading
  | SpotifyRecentlyPlayedHookResultError
  | SpotifyRecentlyPlayedHookResultWithResults;

export interface SpotifyRecentlyPlayedHookResultLoading {
  state: "loading";
}

export interface SpotifyRecentlyPlayedHookResultError {
  state: "error";
  error: string;
}

export interface SpotifyRecentlyPlayedHookResultWithResults {
  state: "results";
  recentlyPlayed: {
    /** track name */
    track: string;
    /** url to link to track on open.spotify.com */
    trackHref: string;
    /** name of first credited artist */
    artist: string;
    /** url to link to artist on open.spotify.com */
    artistHref: string;
    albumImage: string;
    /** name of album */
    album: string;
    /** url to link to album on open.spotify.com */
    albumHref: string;
    /** duration of song, in milliseconds */
    durationMs: number;
    /** time the song was played at */
    playedAt: Date;
  }[];
}

export const useSpotifyRecentlyPlayed = (): SpotifyRecentlyPlayedHookResult => {
  const [ recentlyPlayed, setRecentlyPlayed ] = useState<SpotifyRecentlyPlayedHookResult>({ state: "loading" });
  useEffect(() => {
    fetch("/api/spotify/recently_played")
      .then(r => r.json())
      .then(({ recentlyPlayed }) => {
        setRecentlyPlayed({
          state: "results",
          recentlyPlayed: recentlyPlayed.sort(p => p.played_at).map(p => ({
            track: p.track.name,
            trackHref: `https://open.spotify.com/track/${p.track.id}`,
            artist: p.track.artists[0].name,
            artistHref: `https://open.spotify.com/artist/${p.track.artists[0].id}`,
            albumImage: p.track.album.images[0].url,
            album: p.track.album.name,
            albumHref: `https://open.spotify.com/album/${p.track.album.id}`,
            playedAt: new Date(p.played_at),
            durationMs: p.track.duration_ms,
          })),
        });
      });
  }, []);
  return recentlyPlayed;
}
