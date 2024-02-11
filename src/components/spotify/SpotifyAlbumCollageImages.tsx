import { useEffect, useState } from "react";

export default function SpotifyAlbumCollageImages() {
  const [albumUrls, setAlbumUrls] = useState<string[]>([]);
  useEffect(() => {
    async function getData() {
      const r = await fetch(
        "https://hockerman-com-spotify.mhoc.workers.dev/recent",
        {
          headers: {
            Authorization: `Basic OxcnwUZBWMrwf_hQKMpJmmcXkNcf9ID3`,
          },
        }
      );
      if (r.status === 200) {
        const body = await r.json<any>();
        const albumImageUrls = body.items?.map((item: any) => {
          return item.track?.album?.images[0].url;
        });
        setAlbumUrls(albumImageUrls);
      }
    }
    getData();
  }, []);
  return (
    <>
      {albumUrls.map((albumUrl, i) => (
        <img
          src={albumUrl}
          style={{
            animationDelay: `${0.075 * (i + 1)}s`,
            animationDuration: `4s`,
            animationFillMode: `forwards`,
            animationName: "ease-in",
            backgroundSize: "cover",
            filter: "blur(4px)",
            height: "35vh",
            opacity: "0",
            userSelect: "none",
            width: "35vh",
          }}
        />
      ))}
    </>
  );
}
