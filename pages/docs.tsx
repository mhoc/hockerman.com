import React from 'react';

import BasePage from "../components/BasePage";
import TextHeader from "../components/text/TextHeader";
import TextDeemph from "../components/text/TextDeemph";
import TextLink from "../components/text/TextLink";

const DocsPage = () => {
  return (
    <>
      <BasePage>
        <div className="tileLayout">
          <div className="tile">
            <TextHeader>Documentation</TextHeader>
            <br />
            <TextDeemph>
              An index for various project and library documentation sites I maintain.
            </TextDeemph>
            <br /><br />
            &nbsp;&nbsp;
            <TextLink href="https://mike.hockerman.com/docs/aws-cred-report-ts">@mhoc/aws-cred-report</TextLink>&nbsp;<TextDeemph>(nodejs)</TextDeemph>
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
          min-width: 400px;
          width: 50%;
        }
      `}</style>
    </>
  );
}

export default DocsPage;
