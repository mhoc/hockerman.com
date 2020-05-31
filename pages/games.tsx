import React from 'react';

import BasePage from "../components/BasePage";
import JSONBio from "../components/bio/JSONBio";
import TextHeader from "../components/text/TextHeader";
import TypingCursor from "../components/text/TypingCursor";

const IndexPage = () => {
  return (
    <BasePage>
      <div><TextHeader>{`games`}<TypingCursor /></TextHeader></div>
      <br />
      <main>
        <JSONBio />
      </main>
      <br />
    </BasePage>
  );
}

export default IndexPage;
