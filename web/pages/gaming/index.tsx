import React, { useState } from 'react';

import BasePage from "../../components/BasePage";
import GamingProfiles from "../../components/gaming/GamingProfiles";
import { BodyJSON, KeyValueJSONEntity } from '../../components/json';

const GamingPage = () => {
  const [ selectedTab, onSelectedTabChange ] = useState("profiles");
  return (
    <BasePage
      header="./gaming"
      nav={[{ label: "home", href: "/" }, { label: "mike" }, { label: "gaming" } ]}
      onClickTab={onSelectedTabChange}
      selectedTab={selectedTab}
      tabs={["profiles"]}
    >
      {selectedTab === "profiles" && <GamingProfiles />}
      {selectedTab === "opinion" && (
        <BodyJSON data={[
          new KeyValueJSONEntity("best_of_2010s", "./bestof2010s", { href: "/gaming/bestof2010s" }),
        ]} />
      )}
    </BasePage>
  );
}

export default GamingPage;
