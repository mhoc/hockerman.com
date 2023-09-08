import Link from "./_components/Link/Link";
import Text from "./_components/Text/Text";
import SpotifyApplication from "./_server/spotify/SpotifyApplication";
import SpotifyUsers from "./_server/spotify/SpotifyUsers";

const MIKES_USER_ID_NOT_SECRET_NO_HACKERINO = "2pkxvc9fMW5IH-MsSdj-h";

export default async function SpotifyNowPlayingLink() {
  const spotifyApp = new SpotifyApplication();
  const spotifyUsers = new SpotifyUsers();
  const user = await spotifyUsers.getById(
    MIKES_USER_ID_NOT_SECRET_NO_HACKERINO
  );
  const spotifyClient = await spotifyApp.clientFromRefreshToken(
    user.refresh_token!
  );
  const { currentlyPlaying } = await spotifyClient.currentlyPlaying();
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
