import getSpotifyCurrentlyPlaying from "./_server/spotify/getSpotifyCurrentlyPlaying";

export async function SpotifyNowPlayingText() {
  const { currentlyPlaying } = await getSpotifyCurrentlyPlaying();
  if (!currentlyPlaying) {
    return "Playing Nothing";
  }
  const track = currentlyPlaying.item?.name;
  const artist = currentlyPlaying.item?.artists[0].name;
  if (!track || !artist) {
    return "Playing Nothing";
  }
  const trackArtist = `${track} - ${artist}`;
  return trackArtist;
}
