import React from "react";

import TypingCursor from "../components/text/TypingCursor";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

import TextDeemph from "./text/TextDeemph";
import TextHeader from "./text/TextHeader";
import TextLink from "./text/TextLink";
import TextStd from "./text/TextStd";

interface Props {
  children: any;
  header: any;
  nav: { label: string, href?: string }[];
  onClickTab?: (tab: string) => void;
  selectedTab?: string;
  tabs?: string[];
}

const BasePage = ({ children, header, nav, onClickTab, selectedTab, tabs }: Props) => {
  return (
    <>
      <div className="globalcontainer">
        <header>
          <div className="nav-container">
            <TextDeemph>$PWD=</TextDeemph>
            {nav.map(navItem => {
              return (
                <span>
                  <TextDeemph>/</TextDeemph>
                  {navItem.href 
                    ? <TextLink hideUnderline href={navItem.href}>{navItem.label}</TextLink>
                    : <TextDeemph>{navItem.label}</TextDeemph>
                  }
                </span>
              )
            })}
            <TextDeemph>/</TextDeemph>
          </div>
          <div className="header-container">
            <TextHeader>{header}<TypingCursor /></TextHeader>
            &nbsp;
            &nbsp;
            {tabs && tabs.length > 1 ? tabs.map(tab => (
              <div className={`tab-container${selectedTab === tab ? " tab-selected" : ""}`} key={tab}>
                {selectedTab === tab
                  ? <TextStd>{tab}</TextStd>
                  : <TextLink onClick={() => onClickTab ? onClickTab(tab) : undefined}>{tab}</TextLink>
                }
              </div>
            )) : null}
          </div>
        </header>
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
          max-width: 1200px;
          padding: 15vh 10vw;
        }
        @media only screen and (max-width: 600px) {
          .globalcontainer {
            padding: 15vh 5vw;
          }
        }
        .nav-container {
          margin-bottom: 4px;
        }
        .header-container {
          align-items: center;
          display: flex;
          flex-direction: row;
          margin-bottom: 24px;
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
