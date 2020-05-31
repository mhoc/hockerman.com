import React from "react";

import BodyJSON from "../BodyJSON";

const data = [
  { kind: "comment", comment: "contact" },
  { kind: "item", key: "email", value: "mike@hockerman.com", href: "mailto:mike@hockerman.com" },
  { kind: "item", key: "github", value: "mhoc", href: "https://github.com/mhoc", isExternal: true },
  { kind: "item", key: "twitter", value: "@mikehockerman", href: "https://twitter.com/MikeHockerman", isExternal: true },
  { kind: "item", key: "resume.pdf", value: "/resume-mike-hockerman.pdf", href: "/resume-mike-hockerman.pdf" },
  { kind: "br" },
  { kind: "comment", comment: "content" },
  { kind: "item", key: "gaming", value: "/gaming", href: "/gaming" },
];

const JSONBio = () => (
  <BodyJSON data={data} />
)

export default JSONBio;
