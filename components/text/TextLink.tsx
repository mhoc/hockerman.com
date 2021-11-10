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
        animation-name: rainbow;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        line-height: 1.4;
      }
      .no-underline {
        text-decoration: none;
      }
      @keyframes rainbow {
        0% { color: #f48fb1; }
        10% { color: #ef9a9a; }
        20% { color: #ce93d8; }
        30% { color: #b39ddb; }
        40% { color: #9fa8da; }
        50% { color: #90caf9; }
        60% { color: #81d4fa; }
        70% { color: #80deea; }
        80% { color: #80cbc4; }
        90% { color: #a5d6a7; }
        100% { color: #c5e1a5; }
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
