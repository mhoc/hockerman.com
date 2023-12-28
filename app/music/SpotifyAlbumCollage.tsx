import getSpotifyRecentlyPlayed from "../_server/spotify/getSpotifyRecentlyPlayed";

import styles from "./SpotifyAlbumCollage.module.css";

interface Props {}

export default async function SpotifyAlbumCollage({}: Props) {
  const { recentPlays } = await getSpotifyRecentlyPlayed();
  const albumImageUrls = recentPlays.map(
    (recentPlay) => recentPlay.track.album.images[0].url
  );
  // this art-drag-blocker is a weird one.
  // obviously, this is just a grid of imgs; so, they're interactable. but I want it to be more like
  // a background.
  // so, first we have user-select: none on each img. that helps; without it, the user can highlight
  // or select images with their mouse, which looks gross.
  // but even with that, the user can still drag and drop images from the background. weird.
  // so; to stop that, i created a full screen sized div, 100vh by 100vw, invisible, and just z
  // layer it on top of the album art, but below the main content (which ends up being z-layer -1).
  return (
    <>
      <div className={styles.artDragBlocker} />
      <div className={styles.viewportContainer}>
        <div className={styles.container}>
          {albumImageUrls.map((u, i) => (
            <img
              className={styles.bgimage}
              key={`${i}${u}`}
              src={u}
              style={{ animationDelay: `${0.075 * (i + 1)}s` }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
