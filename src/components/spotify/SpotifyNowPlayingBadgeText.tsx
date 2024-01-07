import { useEffect, useState } from "react";

export default function SpotifyNowPlayingBadgeText() {
  const [text, setText] = useState("................");
  useEffect(() => {
    async function getData() {
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
        const track = body.item?.name;
        const artist = body.item?.artists[0].name;
        if (!track || !artist) {
          setText("Nothing Playing");
        } else {
          setText(`${track} - ${artist}`);
        }
      } else if (r.status === 204) {
        setText("Nothing Playing");
      }
    }
    getData();
  }, []);
  return text;
}
