import formatDistanceToNow from "date-fns/formatDistanceToNow";
import times from "lodash/times";

import { useSpotifyRecentlyPlayed } from "../hooks/useSpotifyRecentlyPlayed";
import { TextDeemph, TextLink, TextLoading } from "../text";

export const SpotifyRecentlyPlayedList = () => {
  const srp = useSpotifyRecentlyPlayed();
  return (
    <>
      <div className="container">
        {srp.state === "loading" && (
          times(4, () => (
            <div>
              <TextDeemph>[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</TextDeemph>
              &nbsp;
              <TextLoading />
              &nbsp;
              <TextLink hideUnderline>{">"}</TextLink>
            </div>
          ))
        )}
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
          align-items: space-between;
          justify-content: space-between;
          display: flex;
          flex-direction: column;
          height: 85px;
        }
      `}</style>
    </>
  )
}
