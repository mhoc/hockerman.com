import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { truncate } from "lodash";

import { SpotifyNowPlayingHookResult } from "../hooks/useSpotifyNowPlaying";
import { TextDeemph, TextLink, TextLoading, TextSubheader } from "../text";
import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";

interface Props {
  snp: SpotifyNowPlayingHookResult;
}

export const SpotifyNowPlayingBanner = ({ snp }: Props) => {
  return (
    <>
      <div className="container">
        <div className="song-title">
          <TextSubheader>
            <div className="spotify-icon">
              <FontAwesomeIcon icon={faSpotify} />
            </div>
          </TextSubheader>
          &nbsp;
          {snp.state === "loading" && <TextLoading />}
          {snp.state === "nothing" && <TextDeemph>Now Playing: Nothing :)</TextDeemph>}
          {(snp.state === "playing" || snp.state === "paused") && (
            <TextLink href={snp.trackHref} target="_blank" rel="noopener">{truncate(snp.track, { length: 40})}</TextLink>
          )}&nbsp;
        </div>
        <div className="artist">
          {(snp.state === "playing" || snp.state === "paused") && (
            <span>
              <TextDeemph>by</TextDeemph>&nbsp;
              <TextLink href={snp.artistHref} target="_blank" rel="noopener">{truncate(snp.artist, { length: 20 })}</TextLink>
            </span>
          )}&nbsp;
        </div>
        <div className="album">
          {(snp.state === "playing" || snp.state === "paused") && (
            <span>
              <TextDeemph>on</TextDeemph>&nbsp;
              <TextLink href={snp.albumHref} target="_blank" rel="noopener">{truncate(snp.album, { length: 30})}</TextLink>
            </span>
          )}&nbsp;
        </div>
        <div className="playcounter">
          {(snp.state === "playing" || snp.state === "paused") && (
            <TextDeemph>({snp.progressCurrentFmt}/{snp.durationFmt})</TextDeemph>
          )}
        </div>
      </div>
      <style jsx>{`
        .container {
          align-items: center;
          display: flex;
          flex-direction: row;
        }
        @media only screen and (max-width: 600px) {
          .container {
            align-items: start;
            display: flex;
            flex-direction: column;
          }
          .playcounter {
            display: none;
          }
        }
        .song-title {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .spotify-icon {
          align-items: center;
          display: flex;
          flex-direction: row;
          height: 20px;
          width: 20px;
        }
      `}</style>
    </>
  );
}
