import React, { useState } from 'react';

import BasePage from "../components/BasePage";
import GamingProfiles from "../components/gaming/GamingProfiles";
import GamingRankingsTable from '../components/gaming/GamingRankingsTable';

const IndexPage = () => {
  const [ selectedTab, onSelectedTabChange ] = useState("profiles");
  return (
    <BasePage 
      header="gaming"
      onClickTab={onSelectedTabChange}
      selectedTab={selectedTab}
      tabs={["profiles", "reviews"]}
    >
      {selectedTab === "profiles" && <GamingProfiles />}
      {selectedTab === "reviews" && <GamingRankingsTable />}
    </BasePage>
  );
}

export default IndexPage;
