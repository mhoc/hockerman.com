import { subDays, subHours } from "date-fns";

import { SpotifyPlays } from "../../../../server/base";

const MIKES_USER_ID_NOT_SECRET_NO_HACKERINO = "2pkxvc9fMW5IH-MsSdj-h";

export default async function handler(req, res) {
  const count = parseInt(req.query.count ?? "3");
  const sinceHours = req.query.sinceHours ?? "168";
  const spotifyPlays = new SpotifyPlays();
  const topArtists = await spotifyPlays.statTopArtistsSince({
    count,
    since: subHours(new Date(), sinceHours),
    userId: MIKES_USER_ID_NOT_SECRET_NO_HACKERINO,
  });
  res.status(200).json({ topArtists });
}
