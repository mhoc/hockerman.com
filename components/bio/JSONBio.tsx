import React from "react";

import BodyJSON from "../BodyJSON";

const data = [
  { key: "email", value: "mike@hockerman.com", href: "mailto:mike@hockerman.com" },
  { key: "github", value: "mhoc", href: "https://github.com/mhoc", isExternal: true },
  { key: "twitter", value: "@mikehockerman", href: "https://twitter.com/MikeHockerman", isExternal: true },
  { key: "linkedin", value: "mikehock", href: "https://linkedin.com/in/mikehock", isExternal: true },
  { key: "resume.pdf", value: "download", href: "/resume-mike-hockerman.pdf" },
  { key: "resume.html", value: "/resume", href: "/resume.html" },
];

const JSONBio = () => (
  <BodyJSON dataset={data} />
)

export default JSONBio;
