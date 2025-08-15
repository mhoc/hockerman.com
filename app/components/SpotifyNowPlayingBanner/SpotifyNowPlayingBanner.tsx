import { FaSpotify } from "react-icons/fa6";
import { Spotify } from "@/app/server/Spotify";
import { Fragment } from "react";

export const SpotifyNowPlayingBanner = async () => {
  const currentlyPlayingResponse = await Spotify.currentlyPlaying();
  if (currentlyPlayingResponse.status === 204) {
    return <Fragment />;
  }
  const response = await currentlyPlayingResponse.json();
  let track = response.item.name;
  if (track.length > 20) {
    track = track.slice(0, 20) + "...";
  }
  let artist = response.item.artists[0].name;
  if (artist.length > 20) {
    artist = artist.slice(0, 20) + "...";
  }

  return (
    <div className="flex flex-row gap-2 items-center">
      <FaSpotify className="text-slate-300" />
      <div className="flex flex-col">
        <span className="text-sm text-slate-300">{track}</span>
        <span className="text-sm text-slate-500">{artist}</span>
      </div>
    </div>
  );
};
