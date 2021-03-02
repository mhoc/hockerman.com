import React from 'react';

import BasePage from "../components/BasePage";
import BodyJSON from "../components/BodyJSON";

const data = [
  { kind: "item", key: "email", value: "mike@hockerman.com", href: "mailto:mike@hockerman.com" },
  { kind: "item", key: "twitter", value: "@mikehockerman", href: "https://twitter.com/mikehockerman", isExternal: true },
  { kind: "item", key: "github", value: "mhoc", href: "https://github.com/mhoc", isExternal: true },
  { kind: "br" },
  { kind: "comment", comment: "resume" },
  { kind: "item", key: "resume.pdf", value: "download", href: "/resume-mike-hockerman.pdf" },
  { kind: "array.single-line", key: "experience", items: [ { value: "expand" } ] },
  { kind: "br" },
  { kind: "comment", comment: "content" },
  { kind: "item", key: "gaming", value: "/gaming", href: "/gaming" },
  { kind: "item", key: "one", value: "/one", href: "/one" },
];

const IndexPage = () => {
  return (
    <BasePage header="cat ./mike_hockerman.json" nav={[{label:"home"}]}>
      <BodyJSON data={data} />
    </BasePage>
  );
}

export default IndexPage;
