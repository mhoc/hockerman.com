import React from "react";

import colors from "../../styles/colors";

const TextLink = ({ children, href, rel }) => (
  <>
    <a className="link" href={href} rel={rel}>
      {children}
    </a>
    <style jsx>{`
      .link {
        color: ${colors.secondary};
        line-height: 1.4;
      }
    `}</style>
  </>
)

export default TextLink;
