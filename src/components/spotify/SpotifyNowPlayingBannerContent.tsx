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
        const body = await r.json<any>();
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
      <span className="text-lg lg:text-xl text-zinc-200 italic leading-4 transition-all">
        {trackName ? trackName : <>&nbsp;</>}
      </span>
      <span className="text-sm lg:text-md text-zinc-400 leading-3 transition-all">
        {artistName}
      </span>
      <span className="text-sm lg:text-md text-zinc-400 leading-3 transition-all">
        {albumName ? albumName : <>&nbsp;</>}
      </span>
    </>
  );
}
