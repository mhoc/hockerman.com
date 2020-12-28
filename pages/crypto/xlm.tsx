import React from "react";

import BasePage from "../../components/BasePage";
import { CryptoWallet } from "../../components/crypto/CryptoWallet";

const CryptoXLM = () => {
  return (
    <BasePage header="stellar-cli getaddress" nav={[
      { label: "home", href: "/" }, 
      { label: "crypto" }, 
      { label: "xlm" }, 
    ]}>
      <CryptoWallet 
        kind="Stellar Lumens (XLM)"
        address="GDQP2KPQGKIHYJGXNUIYOMHARUARCA7DJT5FO2FFOOKY3B2WSQHG4W37"
        meta={{ memo: "2857215044" }}
        qrCodeSrc="/crypto/qr-xlm.svg"
      />
    </BasePage>
  )
}

export default CryptoXLM;
