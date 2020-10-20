import React, { useState } from 'react';

import BasePage from "../../components/BasePage";
import BodyJSON from "../../components/BodyJSON";
import GamingProfiles from "../../components/gaming/GamingProfiles";

const GamingPage = () => {
  const [ selectedTab, onSelectedTabChange ] = useState("profiles");
  return (
    <BasePage
      header="./gaming"
      nav={[{ label: "home", href: "/" }, { label: "gaming" } ]}
      onClickTab={onSelectedTabChange}
      selectedTab={selectedTab}
      tabs={["profiles", "opinion"]}
    >
      {selectedTab === "profiles" && <GamingProfiles />}
      {selectedTab === "opinion" && (
        <BodyJSON data={[
          { kind: "item", key: "best_of_2010s", value: "./bestof2010s", href: "/gaming/bestof2010s" }, 
        ]} />
      )}
    </BasePage>
  );
}

export default GamingPage;
