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
      <div className="relative overflow-hidden rounded">
        {itemPlaying && (
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 flex items-center gap-[2px] px-1">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-cobalt-700 rounded-[1px]"
                  style={{
                    animation: `spectrograph 1.${2 + (i % 8)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.05}s`,
                    minHeight: "2px",
                  }}
                />
              ))}
            </div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to right, var(--color-cobalt-900) 0%, transparent 100%)",
              }}
            />
          </div>
        )}
        <Link className="relative flex flex-row gap-2 items-center" to="/">
          <FaSpotify
            className={clsx({
              "text-cobalt-200": itemPlaying,
              "text-cobalt-500": !itemPlaying,
            })}
          />
          {itemPlaying && (
            <div className="flex flex-col">
              <span className="font-serif text-cobalt-200 leading-none select-none">{track}</span>
              <span className="font-serif text-sm text-cobalt-500 leading-none select-none">{artist}</span>
            </div>
          )}
          {!itemPlaying && (
            <div className="flex flex-col h-8 justify-center">
              <span className="font-serif text-cobalt-500 leading-none select-none">Nothing Playing</span>
            </div>
          )}
        </Link>
      </div>
    </LoadingSkeleton>
  );
};
