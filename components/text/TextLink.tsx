import React from "react";

import colors from "../../styles/colors";

interface Props {
  children: React.ReactNode;
  hideUnderline?: boolean;
  href?: string;
  onClick?: () => void;
  rel?: "noopener";
}

const TextLink = ({ children, hideUnderline, href, onClick, rel }: Props) => (
  <>
    <a className={`link ${hideUnderline ? "no-underline" : ""}`} href={href ? href : "#"} onClick={onClick ? onClick : undefined} rel={rel}>
      {children}
    </a>
    <style jsx>{`
      .link {
        color: ${colors.secondary};
        line-height: 1.4;
      }
      .no-underline {
        text-decoration: none;
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
