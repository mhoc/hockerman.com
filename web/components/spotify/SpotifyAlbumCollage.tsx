import { SpotifyNowPlayingHookResult } from "../hooks/useSpotifyNowPlaying";
import { SpotifyRecentlyPlayedHookResult } from "../hooks/useSpotifyRecentlyPlayed";

interface Props {
  snp: SpotifyNowPlayingHookResult;
  srp: SpotifyRecentlyPlayedHookResult;
}

export const SpotifyAlbumCollage = ({ snp, srp }: Props) => {
  return (
    <>
      <div className="viewport-container">
        <div className="container">
          { snp.state === "playing" && <img className="bgimage" src={snp.albumImage} />}
          { snp.state === "playing" && srp.state === "results" && srp.recentlyPlayed.map((rp, i) => (
            <img className="bgimage recent-1" src={rp.albumImage} style={{ 
              "animationDelay": `${0.05*(i+1)}s`,
            }} />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes ease-in {
          from { opacity: 0; }
          to { opacity: 0.15; }
        }
        .viewport-container {
          height: 100vh;
          width: 100vw;
          z-index: -1;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
        }
        .container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 140vw;
        }
        .bgimage {
          animation-duration: 4s;
          animation-fill-mode: forwards;
          animation-name: ease-in;
          background-size: cover;
          filter: blur(2px);
          opacity: 0;
          height: 320px;
          width: 320px;
        }
      `}</style>
    </>
  )
}
