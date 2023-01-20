import { format, startOfMonth, startOfWeek, startOfYear } from 'date-fns';
import { doc, getFirestore } from "firebase/firestore";
import { sortBy, toPairs } from "lodash";
import { useState } from "react";
import { useDocumentOnce } from 'react-firebase-hooks/firestore';

import { FirebaseMuse } from "../../firebase/firebase";
import { TextDeemph, TextLink, TextLoading, TextStd } from "../text";
import { VerticalBarGraph } from "../graphs/VerticalBarGraph";


export const SpotifyBroadStats = () => {
  const [ statsSubject ] = useState<"artist">("artist");
  const [ period, setPeriod ] = useState("today");

  const bucketKey = (() => {
    switch (period) {
      case 'today': return `day_${format(new Date(), 'yyyy-MM-dd')}`;
      case 'week': return `week_${format(startOfWeek(new Date()), 'yyyy-MM-dd')}`;
      case 'month': return `month_${format(startOfMonth(new Date()), 'yyyy-MM-dd')}`;
      case 'year': return `year_${format(startOfYear(new Date()), 'yyyy-MM-dd')}`;
      case 'eternity': return 'eternity';
    }
  })()

  const [ value, loading ] = useDocumentOnce(
    doc(getFirestore(FirebaseMuse), `users/QYGfHh7CVBB9CuWkW659/stats_temporal/${bucketKey}`),
  );

  const onClickPeriod = (newPeriod: string) => {
    return () => setPeriod(newPeriod);
  }
  
  const playsByArtist = !loading && value && value.exists()
    ? toPairs(value.data().plays_by_artist_name as Record<string, number>)
    : [];

  const playsByArtistTotal = playsByArtist.reduce((p, c) => {
    return p + c[1];
  }, 0);
  const topArtists = sortBy(playsByArtist, (i) => `${i[1]} ${i[0]}`)
    .reverse()
    .slice(0, 5);

  return (
    <>
      <div className="container">
        <span>
          <TextDeemph>Plays By [</TextDeemph>&nbsp;
            { statsSubject === "artist" && <TextStd glow>Artist</TextStd>}&nbsp;
          <TextDeemph>]</TextDeemph>
        </span>
        <span>
          <TextDeemph>This [</TextDeemph>&nbsp;
          { period === "today" && <TextStd glow>Day</TextStd>}
          { period !== "today" && <TextLink onClick={onClickPeriod("today")}>Day</TextLink>}&nbsp;
          { period === "week" && <TextStd glow>Week</TextStd>}
          { period !== "week" && <TextLink onClick={onClickPeriod("week")}>Week</TextLink>}&nbsp;
          { period === "month" && <TextStd glow>Month</TextStd>}
          { period !== "month" && <TextLink onClick={onClickPeriod("month")}>Month</TextLink>}&nbsp;
          { period === "year" && <TextStd glow>Year</TextStd>}
          { period !== "year" && <TextLink onClick={onClickPeriod("year")}>Year</TextLink>}&nbsp;
          { period === "eternity" && <TextStd glow>Eternity</TextStd>}
          { period !== "eternity" && <TextLink onClick={onClickPeriod("eternity")}>Eternity</TextLink>}&nbsp;
          <TextDeemph>]</TextDeemph>
        </span>
        
        {!loading && (
          <VerticalBarGraph data={[
            { label: "Total", value: playsByArtistTotal },
            ...topArtists.map(i => ({ label: i[0], value: i[1] })),
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
