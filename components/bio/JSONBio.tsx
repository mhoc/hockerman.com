import React from "react";

import BodyJSON from "../BodyJSON";

const data = [
  { kind: "comment", comment: "contact" },
  { kind: "item", key: "email", value: "mike@hockerman.com", href: "mailto:mike@hockerman.com" },
  { kind: "item", key: "keybase", value: "mhoc", href: "https://keybase.io/mhoc", isExternal: true },
  { kind: "br" },
  { kind: "comment", comment: "profiles" },
  { kind: "item", key: "github", value: "mhoc", href: "https://github.com/mhoc", isExternal: true },
  { kind: "item", key: "twitter", value: "@mikehockerman", href: "https://twitter.com/MikeHockerman", isExternal: true },
  { kind: "item", key: "linkedin", value: "mikehock", href: "https://linkedin.com/in/mikehock", isExternal: true },
  { kind: "item", key: "resume.pdf", value: "download", href: "/resume-mike-hockerman.pdf" },
  { kind: "br" },
  { kind: "comment", comment: "projects" },
  { 
    kind: "array.single-line", 
    key: "aws-cred-report.ts", 
    items: [
      { value: "code", href: "https://github.com/mhoc/aws-cred-report-ts" },
      { value: "npm", href: "https://www.npmjs.com/package/@mhoc/aws-cred-report" },
      { value: "docs", href: "https://aws-cred-report-ts.mhoc.co/" }
    ]
  }
];

const JSONBio = () => (
  <BodyJSON data={data} />
)

export default JSONBio;
