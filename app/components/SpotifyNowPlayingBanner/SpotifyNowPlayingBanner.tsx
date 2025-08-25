import { FaSpotify } from "react-icons/fa6";
import { AudioLines } from "lucide-react";
import { Spotify } from "@/app/server/Spotify";
import { Fragment } from "react";

export const SpotifyNowPlayingBanner = async () => {
  const currentlyPlayingResponse = await Spotify.currentlyPlaying();
  if (currentlyPlayingResponse.status === 204) {
    return <Fragment />;
  }
  const response = await currentlyPlayingResponse.json();
  let track = response?.item?.name;
  if (!track) {
    return <Fragment />;
  }
  if (track.length > 20) {
    track = track.slice(0, 20) + "...";
  }
  let artist = response?.item?.artists[0].name;
  if (artist.length > 20) {
    artist = artist.slice(0, 20) + "...";
  }

  return (
    <div className="flex flex-row gap-2 items-center">
      <FaSpotify className="text-cobalt-200" />
      <div className="flex flex-col">
        <span className="text-sm text-cobalt-200 select-none">{track}</span>
        <span className="text-sm text-cobalt-400 select-none">{artist}</span>
      </div>
      <div className="flex-grow" />
      <a href="/music">
        <AudioLines className="text-cobalt-400 w-4 h-4" />
      </a>
    </div>
  );
};
