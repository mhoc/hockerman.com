import React from "react";

import BasePage from "../../app/_components/BasePage/BasePage";
import { CryptoWallet } from "../../components/crypto/CryptoWallet";

const CryptoETH = () => {
  return (
    <BasePage
      header="ethereum-cli --getaddress"
      nav={[
        { label: "home", href: "/" },
        { label: "mike" },
        { label: "crypto" },
        { label: "eth" },
      ]}
    >
      <CryptoWallet
        kind="Ethereum (ETH)"
        address="0xF775776D9a66951D48405164dF14288c76f5E3b4"
        qrCode="ethereum:0xF775776D9a66951D48405164dF14288c76f5E3b4"
      />
    </BasePage>
  );
};

export default CryptoETH;
