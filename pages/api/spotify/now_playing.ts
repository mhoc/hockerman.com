import { NextApiRequest, NextApiResponse } from "next";

import { SpotifyUsers } from "../../../server/base";
import { SpotifyApplication } from "../../../server/spotify";

const MIKES_USER_ID_NOT_SECRET_NO_HACKERINO = "2pkxvc9fMW5IH-MsSdj-h";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const spotifyApp = new SpotifyApplication();
  const spotifyUsers = new SpotifyUsers();
  const user = await spotifyUsers.getById(
    MIKES_USER_ID_NOT_SECRET_NO_HACKERINO
  );
  const spotifyClient = await spotifyApp.clientFromRefreshToken(
    user.refresh_token
  );
  const { currentlyPlaying } = await spotifyClient.currentlyPlaying();
  res.setHeader("Cache-Control", "public, max-age=300, immutable");
  res.status(200).json({ currentlyPlaying });
}
