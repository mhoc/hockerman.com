import { FaSpotify } from "react-icons/fa6";
import { getSpotifyAccessToken } from "../server/getSpotifyAccessToken";

export async function SpotifyNowPlayingHeader() {
  const accessToken = await getSpotifyAccessToken();
  const currentlyPlayingResponse = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (currentlyPlayingResponse.status === 204) {
    return <span className="text-xl italic text-gray-200 mb-2">Nothing Playing...</span>;
  }
  const response = await currentlyPlayingResponse.json();
  const title = `${response.item.name}`;
  const artist = `${response.item.artists[0].name}`;
  const album = `${response.item.album.name}`;
  const link = `${response.item.external_urls?.spotify}`;
  return (
    <div className="flex flex-col gap-0">
      <a className="text-lg text-emerald-200 leading-none flex flex-row gap-2 items-center" href={link} target="_blank">
        <FaSpotify className="text-emerald-200" />
        {title}
      </a>
      <span className="text-md text-gray-400 italic">
        {artist} - {album}
      </span>
    </div>
  );
}
