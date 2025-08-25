import { FaSpotify } from "react-icons/fa6";
import { Spotify } from "../server/Spotify";

export async function SpotifyNowPlayingHeader() {
  const currentlyPlayingResponse = await Spotify.currentlyPlaying();
  if (currentlyPlayingResponse.status === 204) {
    return <span className="text-lg italic text-cobalt-200 mb-2">Nothing Playing...</span>;
  }
  const response = await currentlyPlayingResponse.json();
  const title = `${response?.item?.name}`;
  const artist = `${response?.item?.artists[0].name}`;
  const album = `${response?.item?.album.name}`;
  const link = `${response?.item?.external_urls?.spotify}`;
  return (
    <div className="flex flex-col gap-0">
      <a className="text-lg text-emerald-200 leading-none flex flex-row gap-2 items-center" href={link} target="_blank">
        <FaSpotify className="text-emerald-200" />
        {title}
      </a>
      <span className="text-md text-cobalt-400">
        {artist} - {album}
      </span>
    </div>
  );
}
