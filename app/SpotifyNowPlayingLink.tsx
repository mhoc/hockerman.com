import Link from "./_components/Link/Link";
import Text from "./_components/Text/Text";
import getSpotifyCurrentlyPlaying from "./_server/spotify/getSpotifyCurrentlyPlaying";

export default async function SpotifyNowPlayingLink() {
  const { currentlyPlaying } = await getSpotifyCurrentlyPlaying();
  if (!currentlyPlaying) {
    return <Text>Nothing :)</Text>;
  }
  const track = currentlyPlaying.item?.name;
  const artist = currentlyPlaying.item?.artists[0].name;
  if (!track || !artist) {
    return <Text>Nothing :D</Text>;
  }
  const trackArtist = `${track} - ${artist}`;
  return <Link href="/music">{trackArtist}</Link>;
}
