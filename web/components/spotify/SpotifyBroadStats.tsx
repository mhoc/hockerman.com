import { useState } from "react";
import { useSpotifyTopArtists } from "../hooks/useSpotifyTopArtists";
import { useSpotifyPlayCount } from "../hooks/useSpotifyPlayCount";
import { TextDeemph, TextLink, TextLoading, TextStd } from "../text";

export const SpotifyBroadStats = () => {
  const [ sinceHours, setSinceHours ] = useState(24);
  const spc = useSpotifyPlayCount(sinceHours);
  const sta = useSpotifyTopArtists();

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

  // the conditional rendering based on the length of the top artists array isn't something im
  // super proud of. but, my thinking is, because the different text elements within the string
  // have different treatments applied to them, its difficult to use some kind of generic
  // "turn this array of strings into an english sentence" helper function.
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
          {sta.state === "loading" && <TextLoading />}
          {sta.state === "results" && sta.topArtists.length === 0 && (
            <TextDeemph>None :(</TextDeemph>
          )}
          {sta.state === "results" && sta.topArtists.length === 1 && (
            <TextStd glow>{sta.topArtists[0]}</TextStd>
          )}
          {sta.state === "results" && sta.topArtists.length === 2 && (
            <span>
              <TextStd glow>{sta.topArtists[0]}</TextStd>
              <TextDeemph> and </TextDeemph>
              <TextStd glow>{sta.topArtists[1]}</TextStd>
            </span>
          )}
          {sta.state === "results" && sta.topArtists.length >= 3 && (
            <span>
              <TextStd glow>{sta.topArtists[0]}</TextStd>
              <TextDeemph>, </TextDeemph>
              <TextStd glow>{sta.topArtists[1]}</TextStd>
              <TextDeemph>, and </TextDeemph>
              <TextStd glow>{sta.topArtists[2]}</TextStd>
            </span>
          )}
        </span>
      </div>
    </>
  )
}
