import React from "react";

import colors from "../../styles/colors";

interface Props {
  children: React.ReactNode;
  href: string;
  rel?: "noopener";
}

const TextLink = ({ children, href, rel }: Props) => (
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
