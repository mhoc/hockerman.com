import intervalToDuration from "date-fns/intervalToDuration";
import { useEffect, useState } from "react";

export type SpotifyNowPlayingHookResult = SpotifyNowPlayingHookResultLoading
  | SpotifyNowPlayingHookResultNothing
  | SpotifyNowPlayingHookResultError
  | SpotifyNowPlayingHookResultWithTrack;

export interface SpotifyNowPlayingHookResultLoading {
  state: "loading";
}

export interface SpotifyNowPlayingHookResultNothing {
  state: "nothing";
}

export interface SpotifyNowPlayingHookResultError {
  state: "error";
  error: string;
}

export interface SpotifyNowPlayingHookResultWithTrack {
  state: "playing" | "paused";
  /** track name */
  track: string;
  /** url to link to track on open.spotify.com */
  trackHref: string;
  /** name of first credited artist */
  artist: string;
  /** url to link to artist on open.spotify.com */
  artistHref: string;
  /** name of album */
  album: string;
  /** url to link to album on open.spotify.com */
  albumHref: string;
  albumImage: string;
  /** progress through song, in milliseconds */
  progressCurrentMs: number;
  /** progress through song, string formatted in MM:SS */
  progressCurrentFmt: string;
  /** duration of song, in milliseconds */
  durationMs: number;
  /** duration of song, string formatted in MM:SS */
  durationFmt: string;
}

export const useSpotifyNowPlaying = (): SpotifyNowPlayingHookResult => {
  const [ listeningTo, setListeningTo ] = useState<SpotifyNowPlayingHookResult>({ state: "loading" });
  useEffect(() => {
    fetch("/api/spotify/now_playing")
      .then(r => r.json())
      .then(({ currentlyPlaying }) => {
        if (!currentlyPlaying) {
          return setListeningTo({ state: "nothing" });
        }
        const currentProgressDuration = intervalToDuration({ start: 0, end: currentlyPlaying.progress_ms });
        const totalDuration = intervalToDuration({ start: 0, end: currentlyPlaying.item.duration_ms });
        setListeningTo({
          state: currentlyPlaying.is_playing ? "playing" : "paused",
          track: currentlyPlaying.item.name,
          trackHref: `https://open.spotify.com/track/${currentlyPlaying.item.id}`,
          artist: currentlyPlaying.item.artists[0].name,
          artistHref: `https://open.spotify.com/artist/${currentlyPlaying.item.artists[0].id}`,
          album: currentlyPlaying.item.album.name,
          albumImage: currentlyPlaying.item.album.images[0].url,
          albumHref: `https://open.spotify.com/album/${currentlyPlaying.item.album.id}`,
          progressCurrentMs: currentlyPlaying.progress_ms,
          progressCurrentFmt: `${currentProgressDuration.minutes}:${String(currentProgressDuration.seconds).padStart(2, "0")}`,
          durationMs: currentlyPlaying.item.duration_ms,
          durationFmt: `${totalDuration.minutes}:${String(totalDuration.seconds).padStart(2, "0")}`,
        });
      });
  }, []);
  return listeningTo;
}
