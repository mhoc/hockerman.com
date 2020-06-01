import React from 'react';

import BasePage from "../components/BasePage";
import JSONBio from "../components/bio/JSONBio";

const IndexPage = () => {
  return (
    <BasePage header="cat ./mike_hockerman.json">
      <JSONBio />
    </BasePage>
  );
}

export default IndexPage;
