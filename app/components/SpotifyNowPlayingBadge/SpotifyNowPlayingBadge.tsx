import { FaSpotify } from "react-icons/fa6";
import { Badge } from "@/app/components/Badge";
import { getSpotifyAccessToken } from "@/app/server/getSpotifyAccessToken";

export const SpotifyNowPlayingBadge = async () => {
  const accessToken = await getSpotifyAccessToken();
  const currentlyPlayingResponse = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
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
