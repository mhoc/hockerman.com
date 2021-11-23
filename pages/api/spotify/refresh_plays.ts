import { IncomingMessage } from "http";

import { SpotifyUsers, SpotifyPlays } from "../../../server/base";
import { SpotifyApplication } from "../../../server/spotify";

export default async function handler(req: IncomingMessage, res) {
  const spotifyApp = new SpotifyApplication();
  
  const superSecretAuthenticationPlzDontHackMe = req.headers.authorization;
  if (process.env.SUPER_SECRET !== superSecretAuthenticationPlzDontHackMe) {
    throw new Error("BAD AUTH BAD BAD BAD");
  }

  const spotifyPlays = new SpotifyPlays();
  const spotifyUsers = new SpotifyUsers();

  try {
    const usersWithSync = await spotifyUsers.findWithSyncEnabled();
    for (const user of usersWithSync) {
      const spotifyClient = await spotifyApp.clientFromRefreshToken(user.refresh_token);
      const playHistory = await spotifyClient.recentlyPlayed();
      for (const play of playHistory.recentPlays) {
        await spotifyPlays.insert({
          id: null,
          album_name: play.track.album.name,
          artist_1_name: play.track.artists[0].name,
          artist_2_name: play.track.artists.length > 1 ? play.track.artists[1].name : undefined,
          artist_3_name: play.track.artists.length > 2 ? play.track.artists[2].name : undefined,
          played_at: play.played_at,
          played_by: user.id,
          spotify_track_id: play.track.id,
          track_duration_ms: play.track.duration_ms,
          track_name: play.track.name,
        });
      }
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: true })
  }
  return res.status(200).json({ okk: true });
}
