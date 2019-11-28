import React from "react";

const TextLink = ({ children, href, rel }) => (
  <>
    <a className="link" href={href} rel={rel}>
      {children}
    </a>
    <style jsx>{`
      .link {
        color: #80cbc4;
        line-height: 1.4;
      }
    `}</style>
  </>
)

export default TextLink;
