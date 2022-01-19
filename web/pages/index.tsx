import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import React from 'react';

import BasePage from "../components/BasePage";
import { useSpotifyNowPlaying } from "../components/hooks/useSpotifyNowPlaying";
import {
  BodyJSON,
  LineBreakJSONEntity,
  KeyValueJSONEntity,
  SingleLineArrayJSONEntity,
} from "../components/json";
import { TextLoading } from "../components/text";

const IndexPage = () => {
  const snp = useSpotifyNowPlaying();
  let listeningTo: React.ReactNode = "";
  switch (snp.state) {
    case "loading": listeningTo = <TextLoading />; break;
    case "nothing": listeningTo = "Nothing :)"; break;
    case "playing":
    case "paused": listeningTo = `${snp.track} - ${snp.artist}`; break;
  }

  const data = [
    new KeyValueJSONEntity("email", "mike@hockerman.com", { href: "mailto:mike@hockerman.com" }),
    new KeyValueJSONEntity("twitter", "@mikehockerman", { href: "https://twitter.com/mikehockerman" }),
    new KeyValueJSONEntity("github", "mhoc", { href: "https://github.com/mhoc" }),
    new KeyValueJSONEntity("resume", ".pdf", { href: "/resume-mike-hockerman.pdf" }),
    new LineBreakJSONEntity(),
    new KeyValueJSONEntity(
      <FontAwesomeIcon icon={faSpotify} style={{ height: "15px", width: "15px" }} />,
      listeningTo,
      { href: snp.state === "loading" ? undefined : "/music" },
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
