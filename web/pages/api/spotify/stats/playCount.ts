import { subHours } from "date-fns";

import { SpotifyPlays } from "../../../../server/base";

const MIKES_USER_ID_NOT_SECRET_NO_HACKERINO = "2pkxvc9fMW5IH-MsSdj-h";

export default async function handler(req, res) {
  const spotifyPlays = new SpotifyPlays();
  const sinceHours = req.query.sinceHours ?? 24;
  const plays = await spotifyPlays.statTotalPlaysSince(
    MIKES_USER_ID_NOT_SECRET_NO_HACKERINO,
    subHours(new Date(), sinceHours),
  );
  res.status(200).json({ playCount: plays });
}
