import React from "react";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

const BasePage = ({ children }) => (
  <>
    <div className="globalcontainer">
      {children}
    </div>
    <style jsx global>{`
      html {
        font-family: ${fonts.primary};
      }
      body {
        background-color: ${colors.background};
        margin: 0;
      }
      .globalcontainer {
        padding: 15vh 10vw;
      }
      @media only screen and (max-width: 600px) {
        .globalcontainer {
          padding: 15vh 5vw;
        }
      }
    `}</style>
  </>
)

export default BasePage;
