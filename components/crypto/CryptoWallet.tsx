import React from "react";
import colors from "../../styles/colors";

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
        <div className="wallet-text-container">
          <TextSubheader>{kind}</TextSubheader>
          <TextStd>{address}</TextStd>
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
          margin-right: 16px;
          width: 300px;
        }
        .wallet-text-container {
          padding-top: 24px;
          display: flex;
          flex-direction: column;
        }
        .meta-container {
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </>
  );
}
