import React, { useEffect, useState } from 'react';

import BasePage from "../components/BasePage";
import BodyJSON from "../components/BodyJSON";

const IndexPage = () => {
  const [ listeningTo, setListeningTo ] = useState<string>("loading...");
  useEffect(() => {
    fetch("/api/spotify/now_playing")
      .then(r => r.json())
      .then(({ currentlyPlaying }) => {
        if (!currentlyPlaying) {
          return setListeningTo("Nothing :)");
        }
        setListeningTo(`${currentlyPlaying.item.name} | ${currentlyPlaying.item.artists[0].name}`);
      });
  });

  const data = [
    { kind: "item", key: "email", value: "mike@hockerman.com", href: "mailto:mike@hockerman.com" },
    { kind: "item", key: "twitter", value: "@mikehockerman", href: "https://twitter.com/mikehockerman", isExternal: true },
    { kind: "item", key: "github", value: "mhoc", href: "https://github.com/mhoc", isExternal: true },
    { kind: "item", key: "resume.pdf", value: "download", href: "/resume-mike-hockerman.pdf" },
    { kind: "br" },
    { kind: "item", key: "listening_to", value: listeningTo, href: "/music" },
    { kind: "br" },
    { kind: "item", key: "gaming", value: "/gaming", href: "/gaming" },
    { 
      kind: "array.single-line",
      key: "crypto",
      items: [
        { value: "eth", href: "/crypto/eth" },
      ],
    },
  ];
  return (
    <BasePage header="cat ./mike_hockerman.json" nav={[{label:"home"}]}>
      <BodyJSON data={data} />
    </BasePage>
  );
}

export default IndexPage;
