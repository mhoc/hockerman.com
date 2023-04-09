import { NextApiRequest, NextApiResponse } from "next";

import { SpotifyUsers } from "../../../server/base";
import { SpotifyApplication } from "../../../server/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code, error, state } = req.query;
  if (!!error) {
    return res.status(500).json({
      status: "ErrorFromSpotify",
      reason: `Error from spotify auth: ${error}`,
    });
  }
  const spotifyApp = new SpotifyApplication();
  if (state !== spotifyApp.stateToken()) {
    return res.status(401).json({
      status: "InvalidStateToken",
      reason: `Provided state token '${state}' is invalid.'`,
    });
  }
  const spotifyClient = await spotifyApp.clientFromAuthCode(code as string);
  const spotifyUsers = new SpotifyUsers();
  const {
    country,
    displayName,
    email,
    href,
    id: spotifyId,
  } = await spotifyClient.user();
  const { created } = await spotifyUsers.insert({
    access_token: spotifyClient.accessToken,
    access_token_expires_at: spotifyClient.expiresAt,
    country,
    display_name: displayName,
    email,
    href,
    id: null,
    refresh_token: spotifyClient.refreshToken,
    spotify_id: spotifyId,
    sync_play_history: false,
  });
  res.status(200).json({ success: true, created });
}
