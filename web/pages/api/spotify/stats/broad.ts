import { subDays, subHours } from "date-fns";

import { SpotifyPlays } from "../../../../server/base";

const MIKES_USER_ID_NOT_SECRET_NO_HACKERINO = "2pkxvc9fMW5IH-MsSdj-h";

export default async function handler(req, res) {
  const spotifyPlays = new SpotifyPlays();
  const results = await Promise.all([
    spotifyPlays.statTotalPlaysSince(MIKES_USER_ID_NOT_SECRET_NO_HACKERINO, subHours(new Date(), 24)),
    spotifyPlays.statTop3ArtistsSince(MIKES_USER_ID_NOT_SECRET_NO_HACKERINO, subDays(new Date(), 7)),
  ]);
  res.status(200).json({ 
    playsInLast24Hours: results[0],
    // topArtistsInLastWeek: results[1],
    topArtistsInLastWeek: [],
  });
}
