import React from "react";

import colors from "../../styles/colors";

interface Props {
  children: React.ReactNode;
  hideUnderline?: boolean;
  href?: string;
  onClick?: () => void;
  rel?: "noopener";
}

export const TextLink = ({ children, hideUnderline, href, onClick, rel }: Props) => (
  <>
    <a className={`link ${hideUnderline ? "no-underline" : ""}`} href={href ? href : "#"} onClick={onClick ? onClick : undefined} rel={rel}>
      {children}
    </a>
    <style jsx>{`
      .link {
        animation-name: rainbow;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
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
);
