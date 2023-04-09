import { NextApiRequest, NextApiResponse } from "next";

import { SpotifyUsers, SpotifyPlays } from "../../../server/base";
import { SpotifyApplication } from "../../../server/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const spotifyApp = new SpotifyApplication();

  const superSecretAuthenticationPlzDontHackMe = req.headers.authorization;
  if (process.env.SUPER_SECRET !== superSecretAuthenticationPlzDontHackMe) {
    res.status(403).send({ error: "unauthorized" });
    return;
  }

  const spotifyPlays = new SpotifyPlays();
  const spotifyUsers = new SpotifyUsers();

  try {
    const usersWithSync = await spotifyUsers.findWithSyncEnabled();
    for (const user of usersWithSync) {
      const spotifyClient = await spotifyApp.clientFromRefreshToken(
        user.refresh_token
      );
      const playHistory = await spotifyClient.recentlyPlayed();
      for (const play of playHistory.recentPlays) {
        await spotifyPlays.insert({
          id: null,
          album_name: play.track.album.name,
          album_spotify_id: play.track.album.id,
          artist_1_name: play.track.artists[0].name,
          artist_1_spotify_id: play.track.artists[0].id,
          artist_2_name:
            play.track.artists.length > 1
              ? play.track.artists[1].name
              : undefined,
          artist_2_spotify_id:
            play.track.artists.length > 1
              ? play.track.artists[1].id
              : undefined,
          artist_3_name:
            play.track.artists.length > 2
              ? play.track.artists[2].name
              : undefined,
          artist_3_spotify_id:
            play.track.artists.length > 2
              ? play.track.artists[2].id
              : undefined,
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
    return res.status(500).json({ error: true });
  }
  return res.status(200).json({ okk: true });
}
