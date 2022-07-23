import { useState } from "react";
import { useSpotifyTopArtists } from "../hooks/useSpotifyTopArtists";
import { useSpotifyPlayCount } from "../hooks/useSpotifyPlayCount";
import { TextDeemph, TextLink, TextLoading, TextStd } from "../text";

export const SpotifyBroadStats = () => {
  const [ playCountInPeriod, setPlayCountInPeriod ] = useState("Past Day");
  const [ topArtistsInPeriod, setTopArtistsInPeriod ] = useState("Past Day");

  const periodToHours = (period: string): number => {
    switch (period) {
      case "Past Day": return 24;
      case "Past Week": return 24 * 7;
      case "Past Month": return 24 * 30;
      case "Past Year": return 24 * 365;
      case "All Time": return 24 * 365 * 30;
    }
  }

  const spc = useSpotifyPlayCount(periodToHours(playCountInPeriod));
  const sta = useSpotifyTopArtists(periodToHours(topArtistsInPeriod));

  const clickPlayCountPeriod = () => {
    setPlayCountInPeriod((current: string): string => {
      switch (current) {
        case "Past Day": return "Past Week";
        case "Past Week": return "Past Month";
        case "Past Month": return "Past Year";
        case "Past Year": return "All Time";
        case "All Time": return "Past Day";
      }
    });
  }

  const clickTopArtistsPeriod = () => {
    setTopArtistsInPeriod((current: string) => {
      switch (current) {
        case "Past Day": return "Past Week";
        case "Past Week": return "Past Month";
        case "Past Month": return "Past Year";
        case "Past Year": return "All Time";
        case "All Time": return "Past Day";
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
            Plays (<TextLink color="deemph" onClick={clickPlayCountPeriod}>{playCountInPeriod}</TextLink>):
          </TextDeemph>&nbsp;
          {spc.state === "loading" && <TextLoading />}
          {spc.state === "results" && <TextStd glow>{spc.playCount}</TextStd>}
        </span>
        <br />
        <span>
          <TextDeemph>Top Artists (<TextLink color="deemph" onClick={clickTopArtistsPeriod}>{topArtistsInPeriod}</TextLink>):</TextDeemph>&nbsp;
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
