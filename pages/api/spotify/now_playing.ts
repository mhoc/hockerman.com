import { SpotifyUsers } from "../../../server/base";
import { SpotifyApplication } from "../../../server/spotify";

export default async function handler(req, res) {
  const spotifyUsers = new SpotifyUsers();
  const user = await spotifyUsers.getById("2pkxvc9fMW5IH-MsSdj-h");
  const spotifyApp = new SpotifyApplication();
  const spotifyClient = await spotifyApp.clientFromRefreshToken(user.refresh_token);
  const { currentlyPlaying } = await spotifyClient.currentlyPlaying();
  res.status(200).json({ currentlyPlaying });
}
