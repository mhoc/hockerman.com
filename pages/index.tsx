import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { ReactNode } from "react";

import BasePage from "../components/BasePage";
import { Loader } from "../components/common/Loader";
import { useSpotifyNowPlaying } from "../components/hooks/useSpotifyNowPlaying";
import {
  BodyJSON,
  LineBreakJSONEntity,
  KeyValueJSONEntity,
  SingleLineArrayJSONEntity,
} from "../components/json";

const Index = () => {
  const snp = useSpotifyNowPlaying();
  let listeningTo: ReactNode = "";
  switch (snp.state) {
    case "loading":
      listeningTo = <Loader variant="text" />;
      break;
    case "nothing":
      listeningTo = "Now Playing: Nothing";
      break;
    case "playing":
    case "paused":
      listeningTo = `${snp.track} - ${snp.artist}`;
      break;
  }

  const data = [
    new KeyValueJSONEntity("email", "mike@hockerman.com", {
      href: "mailto:mike@hockerman.com",
    }),
    new SingleLineArrayJSONEntity("twitter", [
      { value: "@mikehockerman", href: "https://twitter.com/mikehockerman" },
      { value: "search", href: "/twitter" },
    ]),
    new KeyValueJSONEntity("github", "mhoc", {
      href: "https://github.com/mhoc",
    }),
    new KeyValueJSONEntity("resume", ".pdf", {
      href: "/resume-mike-hockerman.pdf",
    }),
    new LineBreakJSONEntity(),
    new KeyValueJSONEntity(
      (
        <FontAwesomeIcon
          icon={faSpotify}
          style={{ height: "15px", width: "15px" }}
        />
      ),
      listeningTo,
      { href: snp.state === "loading" ? undefined : "/music" }
    ),
    new LineBreakJSONEntity(),
    new SingleLineArrayJSONEntity("crypto", [
      { value: "eth", href: "/crypto/eth" },
    ]),
  ];
  return (
    <BasePage
      header="cat ./mike_hockerman.json"
      nav={[{ label: "home" }, { label: "mike" }]}
    >
      <BodyJSON data={data} />
    </BasePage>
  );
};

export default Index;
