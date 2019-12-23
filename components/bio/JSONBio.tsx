import React from "react";

import BodyJSON from "../BodyJSON";

const data = [
  { kind: "comment", comment: "contact me" },
  { kind: "item", key: "email", value: "mike@hockerman.com", href: "mailto:mike@hockerman.com" },
  { kind: "item", key: "keybase", value: "mhoc", href: "https://keybase.io/mhoc", isExternal: true },
  { kind: "br" },
  { kind: "comment", comment: "socials" },
  { kind: "item", key: "github", value: "mhoc", href: "https://github.com/mhoc", isExternal: true },
  { kind: "item", key: "twitter", value: "@mikehockerman", href: "https://twitter.com/MikeHockerman", isExternal: true },
  { kind: "item", key: "linkedin", value: "mikehock", href: "https://linkedin.com/in/mikehock", isExternal: true },
  { kind: "br" },
  { kind: "comment", comment: "resume" },
  { kind: "item", key: "resume.pdf", value: "download", href: "/resume-mike-hockerman.pdf" },
  { kind: "item", key: "resume.html", value: "/resume", href: "/resume.html" },
];

const JSONBio = () => (
  <BodyJSON data={data} />
)

export default JSONBio;
