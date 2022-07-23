import { SpotifyNowPlayingHookResult } from "../hooks/useSpotifyNowPlaying";
import { SpotifyRecentlyPlayedHookResult } from "../hooks/useSpotifyRecentlyPlayed";

interface Props {
  snp: SpotifyNowPlayingHookResult;
  srp: SpotifyRecentlyPlayedHookResult;
}

export const SpotifyAlbumCollage = ({ snp, srp }: Props) => {
  return (
    <>
      <style jsx>{`
        @keyframes ease-in {
          from { opacity: 0; }
          to { opacity: 0.2; }
        }
        .background-image {
          animation-duration: 2s;
          animation-name: ease-in;
          background-image: url('${snp.state === 'playing' ? snp.artistImageSquare : ''}');
          background-size: cover;
          border-radius: 40px;
          filter: blur(2px);
          height: 500px;
          left: 100px;
          opacity: 0.2;
          position: absolute;
          top: 100px;
          width: 500px;
          z-index: -1;
        }
      `}</style>
    </>
  )
}
