import React from 'react';

import BasePage from "../components/BasePage";
import BodyJSON from "../components/BodyJSON";

const data = [
  { kind: "comment", comment: "contact" },
  { kind: "item", key: "email", value: "mike@hockerman.com", href: "mailto:mike@hockerman.com" },
  { kind: "item", key: "github", value: "mhoc", href: "https://github.com/mhoc", isExternal: true },
  { kind: "item", key: "twitter", value: "@mikehockerman", href: "https://twitter.com/MikeHockerman", isExternal: true },
  { kind: "item", key: "resume.pdf", value: "download", href: "/resume-mike-hockerman.pdf" },
  { kind: "br" },
  { kind: "comment", comment: "content" },
  { kind: "item", key: "gaming", value: "/gaming", href: "/gaming" },
  { kind: "item", key: "one", value: "/one", href: "/one" },
  { kind: "br" },
  { kind: "comment", comment: "crypto" },
  { kind: "item", key: "btc", value: "3LEkvkmd...", href: "/crypto/btc" },
  { kind: "item", key: "eth", value: "0xC6a3d6...", href: "/crypto/eth" },
  { kind: "item", key: "xlm", value: "GDQP2KPQ...", href: "/crypto/xlm" },
];

const IndexPage = () => {
  return (
    <BasePage header="cat ./mike_hockerman.json" nav={[{label:"home"}]}>
      <BodyJSON data={data} />
    </BasePage>
  );
}

export default IndexPage;
