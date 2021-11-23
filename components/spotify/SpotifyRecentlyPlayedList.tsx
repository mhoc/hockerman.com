import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { useSpotifyRecentlyPlayed } from "../hooks/useSpotifyRecentlyPlayed";
import { TextDeemph, TextLink } from "../text";

export const SpotifyRecentlyPlayedList = () => {
  const srp = useSpotifyRecentlyPlayed();
  return (
    <>
      <div className="container">
        {srp.state === "results" && (
          srp.recentlyPlayed.slice(0, 4).map(rp => (
            <div>
              <TextDeemph>
                [{formatDistanceToNow(rp.playedAt, { addSuffix: true })}] {rp.track} - {rp.artist}
              </TextDeemph>
              &nbsp;
              <TextLink hideUnderline href={rp.albumHref} target="_blank">
                {">"}
              </TextLink>
            </div>
          ))
        )}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}
