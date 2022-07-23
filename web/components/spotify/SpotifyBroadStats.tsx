import { useSpotifyBroadStats } from "../hooks/useSpotifyBroadStats";
import { useSpotifyPlayCount } from "../hooks/useSpotifyPlayCount";
import { TextDeemph, TextLoading, TextStd } from "../text";

const SINCE_HOURS = 24;

export const SpotifyBroadStats = () => {
  const spc = useSpotifyPlayCount({ sinceHours: SINCE_HOURS });
  const sbs = useSpotifyBroadStats();
  return (
    <>
      <div>
        <span>
          <TextDeemph>Plays (Past {SINCE_HOURS} Hours):</TextDeemph>&nbsp;
          {spc.state === "loading" && <TextLoading />}
          {spc.state === "results" && <TextStd glow>{spc.playCount}</TextStd>}
        </span>
        <br />
        <span>
          <TextDeemph>Top Artists (Past Week):</TextDeemph>&nbsp;
          {sbs.state === "loading" && <TextLoading />}
          {sbs.state === "results" && (
            <span>
              <TextStd glow>
                {sbs.topArtistsInLastWeek[0]}
              </TextStd>
              <TextDeemph>, </TextDeemph>
              <TextStd glow>
                {sbs.topArtistsInLastWeek[1]}
              </TextStd>
              <TextDeemph>, and </TextDeemph>
              <TextStd glow>
                {sbs.topArtistsInLastWeek[2]}
              </TextStd>
            </span>
          )}
        </span>
      </div>
    </>
  )
}
