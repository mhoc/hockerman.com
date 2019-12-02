import React from 'react';

import BasePage from "../components/BasePage";
import JSONBio from "../components/bio/JSONBio";
import TextHeader from "../components/text/TextHeader";
import TextLink from "../components/text/TextLink";
import TypingCursor from "../components/text/TypingCursor";

const IndexPage = () => {
  return (
    <>
      <BasePage>
        <div className="tileLayout">
          <div className="tile">
            <div><TextHeader>{`cat ./mike_hockerman.json`}<TypingCursor /></TextHeader></div>
            <br />
            <main>
              <JSONBio />
            </main>
            <br />
          </div>
        </div>
      </BasePage>
      <style jsx>{`
        .tileLayout {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .tile {
          flex-grow: 1;
        }
      `}</style>
    </>
  );
}

export default IndexPage;
