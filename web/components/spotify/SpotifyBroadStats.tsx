import { useState } from "react";
import { useSpotifyTopArtists } from "../hooks/useSpotifyTopArtists";
import { useSpotifyPlayCount } from "../hooks/useSpotifyPlayCount";
import { TextDeemph, TextLink, TextLoading, TextStd } from "../text";
import { VerticalBarGraph } from "../graphs/VerticalBarGraph";

const periodToHours = (period: string): number => {
  switch (period) {
    case "Past Day": return 24;
    case "Past Week": return 24 * 7;
    case "Past Month": return 24 * 30;
    case "Past Year": return 24 * 365;
    case "All Time": return 24 * 365 * 30;
  }
}

export const SpotifyBroadStats = () => {
  const [ statsSubject, setStatsSubject ] = useState<"song"|"artist">("artist");
  const [ period, setPeriod ] = useState("Past Day");

  const spc = useSpotifyPlayCount(periodToHours(period));
  const sta = useSpotifyTopArtists(periodToHours(period));

  const onClickSubject = (newSubject: "song" | "artist") => {
    return () => setStatsSubject(newSubject);
  }
  const onClickPeriod = (newPeriod: string) => {
    return () => setPeriod(newPeriod);
  }

  const anyDataLoading = spc.state !== "results" || sta.state !== "results";

  return (
    <>
      <div className="container">
        <span>
          <TextDeemph>Plays By [</TextDeemph>&nbsp;
          { statsSubject === "song" && <TextLink onClick={onClickSubject("artist")}>Artist</TextLink>}
          { statsSubject === "artist" && <TextStd glow>Artist</TextStd>}&nbsp;
          {/* { statsSubject === "song" && <TextStd glow>Song</TextStd>}
          { statsSubject === "artist" && <TextLink onClick={onClickSubject("song")}>Song</TextLink>}&nbsp; */}
          <TextDeemph>]</TextDeemph>
        </span>
        <span>
          <TextDeemph>In the Past [</TextDeemph>&nbsp;
          { period === "Past Day" && <TextStd glow>Day</TextStd>}
          { period !== "Past Day" && <TextLink onClick={onClickPeriod("Past Day")}>Day</TextLink>}&nbsp;
          { period === "Past Week" && <TextStd glow>Week</TextStd>}
          { period !== "Past Week" && <TextLink onClick={onClickPeriod("Past Week")}>Week</TextLink>}&nbsp;
          { period === "Past Month" && <TextStd glow>Month</TextStd>}
          { period !== "Past Month" && <TextLink onClick={onClickPeriod("Past Month")}>Month</TextLink>}&nbsp;
          { period === "Past Year" && <TextStd glow>Year</TextStd>}
          { period !== "Past Year" && <TextLink onClick={onClickPeriod("Past Year")}>Year</TextLink>}&nbsp;
          { period === "All Time" && <TextStd glow>Eternity</TextStd>}
          { period !== "All Time" && <TextLink onClick={onClickPeriod("All Time")}>Eternity</TextLink>}&nbsp;
          <TextDeemph>]</TextDeemph>
        </span>
        {anyDataLoading && <TextLoading />}
        {spc.state === "results" && sta.state === "results" && (
          <VerticalBarGraph data={[
            { label: "Total", value: spc.playCount },
            ...sta.topArtists.map((artist) => ({ label: artist.artistName, value: artist.playCount })),
          ]} maxBarLength={10} />
        )}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}
