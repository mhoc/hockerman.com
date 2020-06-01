import React from "react";

import TypingCursor from "../components/text/TypingCursor";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

import TextHeader from "./text/TextHeader";
import TextLink from "./text/TextLink";
import TextStd from "./text/TextStd";

interface Props {
  children: any;
  header: any;
  onClickTab?: (tab: string) => void;
  selectedTab?: string;
  tabs?: string[];
}

const BasePage = ({ children, header, onClickTab, selectedTab, tabs }: Props) => {
  return (
    <>
      <div className="globalcontainer">
        <header>
          <div className="header-container">
            <TextHeader>{header}<TypingCursor /></TextHeader>
            &nbsp;
            &nbsp;
            {tabs && tabs.length > 1 ? tabs.map(tab => (
              <div className={`tab-container${selectedTab === tab ? " tab-selected" : ""}`}>
                {selectedTab === tab
                  ? <TextStd>{tab}</TextStd>
                  : <TextLink onClick={() => onClickTab ? onClickTab(tab) : undefined}>{tab}</TextLink>
                }
              </div>
            )) : null}
          </div>
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
        .header-container {
          align-items: center;
          display: flex;
          flex-direction: row;
        }
        .tab-container {
          margin-right: 8px;
          padding: 2px 4px;
        }
        .tab-selected {
          border-radius: 4px;
          border: 1px solid ${colors.secondary};
        }
      `}</style>
    </>
  );
}

export default BasePage;
