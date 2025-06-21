/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { getSpotifyRecentlyPlayed } from "../server/getSpotifyRecentlyPlayed";
import styles from "./SpotifyAlbumWipeBackground.module.css";

export async function SpotifyAlbumWipeBackground() {
  const { items: recentlyPlayedItems } = await getSpotifyRecentlyPlayed();

  // obviously, this is just a grid of imgs; so, they're interactable. but I want it to be more like
  // a background.
  // so, first we have user-select: none on each img. that helps; without it, the user can highlight
  // or select images with their mouse, which looks gross.
  // but even with that, the user can still drag and drop images from the background. weird.
  // so; to stop that, i created a full screen sized div, 100vh by 100vw, invisible, and just z
  // layer it on top of the album art, but below the main content (which ends up being z-layer -1)
  return (
    <>
      <div className="absolute top-0 left-0 h-screen w-screen -z-10 overflow-hidden" />
      <div className="absolute top-0 left-0 h-screen w-screen -z-10 overflow-hidden">
        <div className="flex flex-row flex-wrap w-[calc(100vw+20vw)]">
          {recentlyPlayedItems.map((item: any, i: number) => (
            <img
              alt={`${item.artist} - ${item.album}`}
              className={styles.bgimage}
              key={`${i}${item.track.album.images[0].url}`}
              src={item.track.album.images[0].url}
              style={{
                animationDelay: `${0.05 * (i + 1)}s`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
