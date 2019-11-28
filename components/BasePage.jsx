import React from "react";

import colors from "../styles/colors";

const BasePage = ({ children }) => (
  <>
    <div className="container">
      {children}
    </div>
    <style jsx global>{`
      html {
        font-family: 'IBM Plex Mono', monospace;
      }
      body {
        background-color: ${colors.background};
        margin: 0;
      }
      .container {
        padding: 15vh 10vw;
      }
      @media only screen and (max-width: 600px) {
        .container {
          padding: 15vh 5vw;
        }
      }
    `}</style>
  </>
)

export default BasePage;
