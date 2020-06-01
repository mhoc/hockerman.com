import React from "react";

import TypingCursor from "../components/text/TypingCursor";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import TextHeader from "./text/TextHeader";

interface Props {
  children: any;
  header: any;
}

const BasePage = ({ children, header }: Props) => (
  <>
    <div className="globalcontainer">
      <header>
        <TextHeader>{header}<TypingCursor /></TextHeader>
      </header>
      <br />
      <main>
        {children}
      </main>
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
