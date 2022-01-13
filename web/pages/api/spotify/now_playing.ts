import { SpotifyPlays, SpotifyUsers } from "../../../server/base";
import { SpotifyApplication } from "../../../server/spotify";

const MIKES_USER_ID_NOT_SECRET_NO_HACKERINO = "2pkxvc9fMW5IH-MsSdj-h";

export default async function handler(req, res) {
  const spotifyApp = new SpotifyApplication();
  const spotifyPlays = new SpotifyPlays();
  const spotifyUsers = new SpotifyUsers();
  
  const user = await spotifyUsers.getById(MIKES_USER_ID_NOT_SECRET_NO_HACKERINO);
  const spotifyClient = await spotifyApp.clientFromRefreshToken(user.refresh_token);
  const { currentlyPlaying } = await spotifyClient.currentlyPlaying();
  setTimeout(async () => {
    if (currentlyPlaying && currentlyPlaying.currently_playing_type === "track") {
      await spotifyPlays.insert({
        id: null,
        album_name: currentlyPlaying.item.album.name,
        artist_1_name: currentlyPlaying.item.artists[0].name,
        artist_2_name: currentlyPlaying.item.artists.length > 1 ? currentlyPlaying.item.artists[1].name : undefined,
        artist_3_name: currentlyPlaying.item.artists.length > 2 ? currentlyPlaying.item.artists[2].name : undefined,
        played_at: new Date(currentlyPlaying.timestamp).toISOString(),
        played_by: MIKES_USER_ID_NOT_SECRET_NO_HACKERINO,
        spotify_track_id: currentlyPlaying.item.id,
        track_duration_ms: currentlyPlaying.item.duration_ms,
        track_name: currentlyPlaying.item.name,
      });
    }
  }, 100);
  res.status(200).json({ currentlyPlaying });
}
