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
      @media only screen and (max-width: 600px) {
        .link {
          font-size: 0.9rem;
        }
      }
    `}</style>
  </>
)

export default TextLink;
