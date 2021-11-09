import React from "react";
import colors from "../../styles/colors";
import TextDeemph from "../text/TextDeemph";

import TextStd from "../text/TextStd";
import TextSubheader from "../text/TextSubheader";

interface Props {
  kind: string;
  address: string;
  meta?: Record<string, string>;
  qrCodeSrc: string;
}

export const CryptoWallet = (props: Props) => {
  const { address, kind, meta, qrCodeSrc } = props;
  return (
    <>
      <div className="wallet">
        <img className="qr" src={qrCodeSrc} />
        <div className="wallet-text-container" onClick={() => {
            navigator.clipboard.writeText(address);
        }}>
          <TextSubheader>{kind}</TextSubheader>
          <TextStd>{address}</TextStd>
          <TextDeemph>Copy</TextDeemph>
          {meta ? Object.keys(meta).map(k => (
            <div className="meta-container">
              <TextStd>{k}</TextStd>
              &br
              <TextStd>{meta[k]}</TextStd>
            </div>
          )) : <div />}
        </div>
      </div>
      <style jsx>{`
        .wallet {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .qr {
          border: 2px solid ${colors.primary};
          border-radius: 8px;
          height: 300px;
          margin-right: 16px;
          width: 300px;
        }
        .wallet-text-container {
          flex-direction: column;
          display: flex;
          padding: 12px;
        }
        .meta-container {
          display: flex;
          flex-direction: row;
          padding-top: 8px;
        }
      `}</style>
    </>
  );
}
