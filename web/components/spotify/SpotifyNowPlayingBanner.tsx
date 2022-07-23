import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

import { SpotifyNowPlayingHookResult } from "../hooks/useSpotifyNowPlaying";
import { TextDeemph, TextLink, TextLoading, TextSubheader } from "../text";

interface Props {
  snp: SpotifyNowPlayingHookResult;
}

export const SpotifyNowPlayingBanner = ({ snp }: Props) => {
  return (
    <>
      <div className="container">
        <TextSubheader>
          <div className="spotify-icon">
            <FontAwesomeIcon icon={faSpotify} />
          </div>
        </TextSubheader>
        &nbsp;
        {snp.state === "loading" && <TextLoading />}
        {snp.state === "nothing" && <TextDeemph>Now Playing: Nothing :)</TextDeemph>}
        {(snp.state === "playing" || snp.state === "paused") && (
          <>
            <TextLink href={snp.trackHref} target="_blank" rel="noopener">{snp.track}</TextLink>
            &nbsp;<TextDeemph>by</TextDeemph>&nbsp;
            <TextLink href={snp.artistHref} target="_blank" rel="noopener">{snp.artist}</TextLink>
            {snp.album !== snp.track && (
              <>
                &nbsp;<TextDeemph>on</TextDeemph>&nbsp;
                <TextLink href={snp.albumHref} target="_blank" rel="noopener">{snp.album}</TextLink>
              </>
            )}
            &nbsp;
            <TextDeemph>({snp.progressCurrentFmt}/{snp.durationFmt})</TextDeemph>
          </>
        )}
      </div>
      <style jsx>{`
        .container {
          align-items: center;
          display: flex;
          flex-direction: row;
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
