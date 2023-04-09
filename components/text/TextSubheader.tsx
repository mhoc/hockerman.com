import React from "react";

import colors from "../../styles/colors";

export const TextSubheader = ({ children }) => {
  return (
    <>
      <span className="title">{children}</span>
      <style jsx>{`
        .title {
          color: ${colors.secondary};
          font-size: 1.2rem;
        }
        @media only screen and (max-width: 600px) {
          .title {
            font-size: 1.0rem;
          }
        }
      `}</style>
    </>
  )
}
