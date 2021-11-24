import { useSpotifyBroadStats } from "../hooks/useSpotifyBroadStats";
import { TextDeemph, TextStd } from "../text";

export const SpotifyBroadStats = () => {
  const sbs = useSpotifyBroadStats();
  return (
    <>
      <div className="container">
        {sbs.state === "results" && (
          <div>
            <span>
              <TextDeemph>Plays (Past 24 Hours):</TextDeemph>&nbsp;
              <TextStd>{sbs.playsInLast24Hours}</TextStd>
            </span>
            <br />
            <span>
              <TextDeemph>Top Artists (Past Week):</TextDeemph>&nbsp;
              <TextStd>
                {sbs.topArtistsInLastWeek[0]}
              </TextStd>
              <TextDeemph>, </TextDeemph>
              <TextStd>
                {sbs.topArtistsInLastWeek[1]}
              </TextStd>
              <TextDeemph>, and </TextDeemph>
              <TextStd>
                {sbs.topArtistsInLastWeek[2]}
              </TextStd>
            </span>
          </div>
        )}
      </div>
      <style jsx>{`
        .container {
          
        }
      `}</style>
    </>
  )
}
