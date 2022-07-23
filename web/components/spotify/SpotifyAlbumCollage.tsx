import { SpotifyNowPlayingHookResult } from "../hooks/useSpotifyNowPlaying";
import { SpotifyRecentlyPlayedHookResult } from "../hooks/useSpotifyRecentlyPlayed";

interface Props {
  snp: SpotifyNowPlayingHookResult;
  srp: SpotifyRecentlyPlayedHookResult;
}

export const SpotifyAlbumCollage = ({ snp, srp }: Props) => {
  // this art-drag-blocker is a weird one.
  // obviously, this is just a grid of imgs; so, they're interactable. but I want it to be more like
  // a background. 
  // so, first we have user-select: none on each img. that helps; without it, the user can highlight
  // or select images with their mouse, which looks gross.
  // but even with that, the user can still drag and drop images from the background. weird.
  // so; to stop that, i created a full screen sized div, 100vh by 100vw, invisible, and just z 
  // layer it on top of the album art, but below the main content (which ends up being z-layer -1).
  if (snp.state === "playing" || snp.state === "paused" || snp.state === "nothing") {
    return (
      <>
        <div className="art-drag-blocker" />
        <div className="viewport-container">
          <div className="container">
            {snp.state === "playing" && (
              <img className="bgimage" src={snp.albumImage} />
            )}
            {srp.state === "results" && (
              srp.recentlyPlayed.map((rp, i) => (
                <img className="bgimage recent-1" src={rp.albumImage} style={{ 
                  "animationDelay": `${0.05*(i+1)}s`,
                }} />
              ))
            )}
          </div>
        </div>
        <style jsx>{`
          @keyframes ease-in {
            from { opacity: 0; }
            to { opacity: 0.25; }
          }
          .art-drag-blocker {
            height: 100vh;
            width: 100vw;
            opacity: 0;
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
          }
          .viewport-container {
            height: 100vh;
            width: 100vw;
            z-index: -2;
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
            filter: blur(4px);
            opacity: 0;
            height: 35vh;
            user-select: none;
            width: 35vh;
          }
        `}</style>
      </>
    )
  } else {
    return <div />
  }
}
