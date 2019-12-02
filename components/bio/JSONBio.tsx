import React from "react";

import BodyJSON from "../BodyJSON";

const data = [
  { key: "email", value: "mike@hockerman.com", href: "mailto:mike@hockerman.com" },
  { key: "github", value: "mhoc", href: "https://github.com/mhoc", isExternal: true },
  { key: "twitter", value: "@mikehockerman", href: "https://twitter.com/MikeHockerman", isExternal: true },
  { key: "linkedin", value: "mikehock", href: "https://linkedin.com/in/mikehock", isExternal: true },
  { key: "resume", value: "link", href: "/resume-mike-hockerman.pdf" },
];

const JSONBio = () => (
  <BodyJSON dataset={data} />
)

export default JSONBio;
