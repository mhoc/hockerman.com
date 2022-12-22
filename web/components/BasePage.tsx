import React from "react";

import { TextDeemph, TextHeader, TextLink, TextStd, TypingCursor } from "../components/text";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

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
            <div className="pwd">
              <TextDeemph>$PWD=</TextDeemph>
              {nav.map(navItem => {
                return (
                  <span key={navItem.label}>
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
        @font-face {
          font-family: 'JetBrainsMono';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('JetBrainsMono'), url(/fonts/JetBrainsMono-Medium.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: 'IBMPlexMono';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('IBMPlexMono'), url(/fonts/ibm-plex-mono-latin.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
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
          display: flex;
          flex-direction: column;
          margin-bottom: 4px;
        }
        .pwd {
          display: flex; 
          flex-direction: row;
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
