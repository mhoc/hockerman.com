import formatDistanceToNow from "date-fns/formatDistanceToNow";
import times from "lodash/times";

import { SpotifyRecentlyPlayedHookResult } from "../hooks/useSpotifyRecentlyPlayed";
import { TextDeemph, TextLink, TextLoading } from "../text";

interface Props {
  srp: SpotifyRecentlyPlayedHookResult;
}

export const SpotifyRecentlyPlayedList = ({ srp }: Props) => {
  return (
    <>
      <div className="container">
        {srp.state === "loading" && (
          times(4, (i) => (
            <div key={`spotify-recently-played-loader-skeleton-${i}`}>
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
            <div key={`spotify-recently-played-item-${rp.track}`}>
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
          min-height: 85px;
        }
      `}</style>
    </>
  )
}
