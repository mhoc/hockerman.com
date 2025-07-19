import { FaSpotify } from "react-icons/fa6";
import { Badge } from "@/app/components/Badge";
import { Spotify } from "@/app/server/Spotify";

export const SpotifyNowPlayingBadge = async () => {
  const currentlyPlayingResponse = await Spotify.currentlyPlaying();
  let text: string;
  if (currentlyPlayingResponse.status === 204) {
    text = "Nothing Playing";
  } else {
    const response = await currentlyPlayingResponse.json();
    text = `${response.item.name} - ${response.item.artists[0].name}`;
  }
  return (
    <a href="/music">
      <Badge color="text-green-300" hover Icon={FaSpotify}>
        {text}
      </Badge>
    </a>
  );
};
