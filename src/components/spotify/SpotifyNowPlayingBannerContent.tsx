import { useEffect, useState } from "react";

export default function SpotifyNowPlayingBannerContent() {
  const [trackName, setTrackName] = useState("");
  const [artistName, setArtistName] = useState("...");
  const [albumName, setAlbumnName] = useState("");
  useEffect(() => {
    async function get() {
      const r = await fetch(
        "https://hockerman-com-spotify.mhoc.workers.dev/current",
        {
          headers: {
            Authorization: `Basic OxcnwUZBWMrwf_hQKMpJmmcXkNcf9ID3`,
          },
        }
      );
      if (r.status === 200) {
        const body = await r.json();
        const trackName = body?.item?.name;
        const artist = body?.item?.artists[0].name;
        const album = body?.item?.album?.name;
        if (!trackName || !artist || !album) {
          setArtistName("Playing Nothing");
        } else {
          setTrackName(trackName);
          setArtistName(artist);
          setAlbumnName(album);
        }
      } else if (r.status === 204) {
        setArtistName("Playing Nothing");
      }
    }
    get();
  }, []);
  return (
    <>
      <span
        style={{
          color: "#28323E",
          fontSize: "1.2rem",
          fontStyle: "italic",
          transition: "all .25s ease-out",
        }}
      >
        {trackName ? trackName : <>&nbsp;</>}
      </span>
      <span
        style={{
          color: "#28323E",
          fontSize: "0.9rem",
          transition: "all .25s ease-out",
        }}
      >
        {artistName}
      </span>
      <span
        style={{
          color: "#28323E",
          fontSize: "0.9rem",
          transition: "all .25s ease-out",
        }}
      >
        {albumName ? albumName : <>&nbsp;</>}
      </span>
    </>
  );
}
