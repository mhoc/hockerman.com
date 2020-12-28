import React from "react";

import BasePage from "../../components/BasePage";
import { CryptoWallet } from "../../components/crypto/CryptoWallet";

const CryptoETH = () => {
  return (
    <BasePage header="ethereum-cli --getaddress" nav={[
      { label: "home", href: "/" }, 
      { label: "crypto" }, 
      { label: "eth" }, 
    ]}>
      <CryptoWallet 
        kind="Ethereum (ETH)"
        address="0xC6a3d62591FbEf850019157173c96dD04D0de6c4"
        qrCodeSrc="/crypto/qr-eth.svg"
      />
    </BasePage>
  )
}

export default CryptoETH;
