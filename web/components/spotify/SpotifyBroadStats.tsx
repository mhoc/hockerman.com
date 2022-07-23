import { useState } from "react";
import { useSpotifyBroadStats } from "../hooks/useSpotifyBroadStats";
import { useSpotifyPlayCount } from "../hooks/useSpotifyPlayCount";
import { TextDeemph, TextLink, TextLoading, TextStd } from "../text";

export const SpotifyBroadStats = () => {
  const [ sinceHours, setSinceHours ] = useState(24);
  const spc = useSpotifyPlayCount(sinceHours);
  const sbs = useSpotifyBroadStats();

  const clickHours = () => {
    setSinceHours((current: number): number => {
      switch (current) {
        case 12: return 24;
        case 24: return 48;
        case 48: return 96;
        case 96: return 12;
      }
    });
  }

  return (
    <>
      <div>
        <span>
          <TextDeemph>
            Plays (Past <TextLink color="deemph" onClick={clickHours}>{sinceHours}</TextLink> Hours):
          </TextDeemph>&nbsp;
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
