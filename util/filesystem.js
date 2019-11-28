/**
 * this is our cool filesystem. Its just a JS file. 
 * Its not editable. Don't even think about it. All you get is ls and cat. You cant even cd.
 */

const files = [
  {
    names: [ "mike_hockerman.json", "./mike_hockerman.json" ],
    json: [
      { key: "email", value: "mike@hockerman.com", href: "mailto:mike@hockerman.com" },
      { key: "github", value: "mhoc", href: "https://github.com/mhoc", isExternal: true },
      { key: "twitter", value: "@mikehockerman", href: "https://twitter.com/MikeHockerman", isExternal: true },
      { key: "linkedin", value: "mikehock", href: "https://linkedin.com/in/mikehock", isExternal: true },
      { key: "resume", value: "link", href: "/resume-mike-hockerman.pdf" },
    ],
  },
  {
    names: [ "hi" ],
    text: "This site was supposed to be simple. What happened.",
  }
]

export default files;
