import React from "react";

import BasePage from "../../components/BasePage";
import { CryptoWallet } from "../../components/crypto/CryptoWallet";

const CryptoBTC = () => {
  return (
    <BasePage header="bitcoin-cli dumpwallet ~/btc.txt" nav={[
      { label: "home", href: "/" }, 
      { label: "crypto" }, 
      { label: "btc" }, 
    ]}>
      <CryptoWallet 
        kind="Bitcoin (BTC)"
        address="3LEkvkmdQwhe8CAmAgbewML5mBMKSqQuqD"
        qrCodeSrc="/crypto/qr-btc.svg"
      />
    </BasePage>
  )
}

export default CryptoBTC;
