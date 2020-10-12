import React, { useState } from 'react';

import BasePage from "../components/BasePage";
import GamingProfiles from "../components/gaming/GamingProfiles";

const GamingPage = () => {
  const [ selectedTab, onSelectedTabChange ] = useState("profiles");
  return (
    <BasePage 
      header="gaming"
      onClickTab={onSelectedTabChange}
      selectedTab={selectedTab}
      tabs={["profiles"]}
    >
      {selectedTab === "profiles" && <GamingProfiles />}
    </BasePage>
  );
}

export default GamingPage;
