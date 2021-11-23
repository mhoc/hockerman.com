import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useState } from 'react';

import BasePage from "../components/BasePage";
import {
  BodyJSON,
  LineBreakJSONEntity,
  KeyValueJSONEntity,
  SingleLineArrayJSONEntity,
} from "../components/json";
import { TextLoading } from "../components/text";

const IndexPage = () => {
  const [ listeningTo, setListeningTo ] = useState<{ 
    artist: string, track: string, state: "play" | "pause",
  } | undefined>();
  useEffect(() => {
    fetch("/api/spotify/now_playing")
      .then(r => r.json())
      .then(({ currentlyPlaying }) => {
        if (!currentlyPlaying) {
          return setListeningTo(undefined);
        }
        setListeningTo({
          artist: currentlyPlaying.item.artists[0].name,
          track: currentlyPlaying.item.name,
          state: currentlyPlaying.is_playing ? "play" : "pause",
        });
      });
  }, []);

  const listeningToText = listeningTo ? `${listeningTo.track} | ${listeningTo.artist}` : "Nothing :)";

  const data = [
    new KeyValueJSONEntity("email", "mike@hockerman.com", { href: "mailto:mike@hockerman.com" }),
    new KeyValueJSONEntity("twitter", "@mikehockerman", { href: "https://twitter.com/mikehockerman" }),
    new KeyValueJSONEntity("github", "mhoc", { href: "https://github.com/mhoc" }),
    new KeyValueJSONEntity("resume.pdf", "download", { href: "/resume-mike-hockerman.pdf" }),
    new LineBreakJSONEntity(),
    new KeyValueJSONEntity(
      <FontAwesomeIcon icon={faSpotify} style={{ height: "15px", width: "15px" }} />,
      !!listeningTo ? listeningToText : <TextLoading />,
      { href: listeningTo ? "/music" : undefined },
    ),
    new LineBreakJSONEntity(),
    new KeyValueJSONEntity("gaming", "/gaming", { href: "/gaming" }),
    new SingleLineArrayJSONEntity("crypto", [
      { value: "eth", href: "/crypto/eth" },
    ]),
  ];
  return (
    <BasePage header="cat ./mike_hockerman.json" nav={[{label:"home"}]}>
      <BodyJSON data={data} />
    </BasePage>
  );
}

export default IndexPage;
