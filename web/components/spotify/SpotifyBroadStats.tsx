import { useSpotifyBroadStats } from "../hooks/useSpotifyBroadStats";
import { TextDeemph, TextLoading, TextStd } from "../text";

export const SpotifyBroadStats = () => {
  const sbs = useSpotifyBroadStats();
  return (
    <>
      <div className="container">
        <div>
          <span>
            <TextDeemph>Plays (Past 24 Hours):</TextDeemph>&nbsp;
            {sbs.state === "loading" && <TextLoading />}
            {sbs.state === "results" && <TextStd glow>{sbs.playsInLast24Hours}</TextStd>}
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
      </div>
      <style jsx>{`
        .container {
          
        }
      `}</style>
    </>
  )
}
