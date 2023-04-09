import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { truncate } from "lodash";

import { Link } from "../common/Link";
import { Loader } from "../common/Loader";
import { Text } from "../common/Text";
import { SpotifyNowPlayingHookResult } from "../hooks/useSpotifyNowPlaying";

interface Props {
  snp: SpotifyNowPlayingHookResult;
}

export const SpotifyNowPlayingBanner = ({ snp }: Props) => {
  return (
    <>
      <div className="container">
        <div className="song-title">
          <Text>
            <div className="spotify-icon">
              <FontAwesomeIcon icon={faSpotify} />
            </div>
          </Text>
          &nbsp;
          {snp.state === "loading" && <Loader variant="text" />}
          {snp.state === "nothing" && (
            <Text color="muted">Now Playing: Nothing :)</Text>
          )}
          {(snp.state === "playing" || snp.state === "paused") && (
            <Link href={snp.trackHref} target="_blank" rel="noopener">
              {truncate(snp.track, { length: 40 })}
            </Link>
          )}
          &nbsp;
        </div>
        <div className="artist">
          {(snp.state === "playing" || snp.state === "paused") && (
            <span>
              <Text color="muted">by</Text>&nbsp;
              <Link href={snp.artistHref} target="_blank" rel="noopener">
                {truncate(snp.artist, { length: 20 })}
              </Link>
            </span>
          )}
          &nbsp;
        </div>
        <div className="album">
          {(snp.state === "playing" || snp.state === "paused") &&
            snp.album !== snp.track && (
              <span>
                <Text color="muted">on</Text>&nbsp;
                <Link href={snp.albumHref} target="_blank" rel="noopener">
                  {truncate(snp.album, { length: 30 })}
                </Link>
                &nbsp;
              </span>
            )}
        </div>
        <div className="playcounter">
          {(snp.state === "playing" || snp.state === "paused") && (
            <Text color="muted">
              ({snp.progressCurrentFmt}/{snp.durationFmt})
            </Text>
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
};
