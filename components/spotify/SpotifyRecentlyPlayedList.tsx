import intlFormatDistance from "date-fns/intlFormatDistance";
import times from "lodash/times";

import { Link } from "../common/Link";
import { Loader } from "../common/Loader";
import { Text } from "../common/Text";
import { SpotifyRecentlyPlayedHookResult } from "../hooks/useSpotifyRecentlyPlayed";

interface Props {
  srp: SpotifyRecentlyPlayedHookResult;
}

export const SpotifyRecentlyPlayedList = ({ srp }: Props) => {
  return (
    <>
      <div className="container">
        {srp.state === "loading" &&
          times(4, (i) => (
            <div key={`spotify-recently-played-loader-skeleton-${i}`}>
              <Text color="muted">
                [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
              </Text>
              &nbsp;
              <Loader variant="text" />
              &nbsp;
              <Link hideUnderline>{">"}</Link>
            </div>
          ))}
        {srp.state === "results" &&
          srp.recentlyPlayed.slice(0, 4).map((rp) => (
            <div key={`spotify-recently-played-item-${rp.track}`}>
              <Text color="muted">
                <span className="recently-played-when">
                  [
                  {intlFormatDistance(rp.playedAt, new Date(), {
                    style: "long",
                  })}
                  ]&nbsp;
                </span>
                {rp.track} - {rp.artist}
              </Text>
              &nbsp;
              <Link hideUnderline href={rp.albumHref} target="_blank">
                {">"}
              </Link>
            </div>
          ))}
      </div>
      <style jsx>{`
        .container {
          align-items: space-between;
          justify-content: space-between;
          display: flex;
          flex-direction: column;
          min-height: 85px;
        }
        @media only screen and (max-width: 600px) {
          .recently-played-when {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
