import React from "react";

import colors from "../../styles/colors";

interface Props {
  children: React.ReactNode;
  underline?: boolean;
}

const TextHeader = ({ children, underline }: Props) => {
  return (
    <div className="container">
      <span className="title">{children}</span>
      <style jsx>{`
        .container {
          ${underline ? `border-bottom: 1px solid ${colors.primary};` : ""}
          ${underline ? `width: 75%;` : ""}
        }
        .title {
          color: ${colors.primary};
          font-size: 1.7rem;
        }
        @media only screen and (max-width: 600px) {
          .title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default TextHeader;
