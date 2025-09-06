import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { FaSpotify } from "react-icons/fa6";
import { Link } from "react-router";
import { LoadingSkeleton } from "./LoadingSkeleton";

export const SpotifyNowPlayingBanner = () => {
  let { data: currentlyPlayingResponse, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch(`https://spotify-bridge.hockerman.com/currently_playing`, {
        headers: { "X-SECRET": "D8ci5xysFy9-WX8U" },
      });
      const responseBody = await response.json();
      console.log(responseBody);
      return responseBody;
    },
    queryKey: ["spotify", "now_playing"],
  });
  let track = currentlyPlayingResponse?.item?.name;
  if (track?.length > 40) {
    track = track.slice(0, 40) + "...";
  }
  let artist = currentlyPlayingResponse?.item?.artists[0].name;
  if (artist?.length > 30) {
    artist = artist.slice(0, 30) + "...";
  }
  const itemPlaying = track && artist;
  return (
    <LoadingSkeleton className="w-80 h-8" isLoading={isLoading} loadingBody={<FaSpotify className="text-cobalt-600" />}>
      <Link className="flex flex-row gap-2 items-center" to="/music">
        <FaSpotify className="text-cobalt-200" />
        {itemPlaying && (
          <div className="flex flex-col">
            <span className="font-serif text-cobalt-200 leading-none select-none">{track}</span>
            <span className="font-serif text-sm text-cobalt-500 leading-none select-none">{artist}</span>
          </div>
        )}
        {!itemPlaying && (
          <span className="font-serif text-cobalt-600 leading-none select-none">Nothing Playing</span>
        )}
      </Link>
    </LoadingSkeleton>
  );
};
