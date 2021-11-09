import * as qrcode from "qrcode";
import React, { useState, useEffect } from "react";

import colors from "../../styles/colors";
import TextDeemph from "../text/TextDeemph";
import TextStd from "../text/TextStd";
import TextSubheader from "../text/TextSubheader";

interface Props {
  kind: string;
  address: string;
  meta?: Record<string, string>;
  qrCode: string;
}

export const CryptoWallet = (props: Props) => {
  const { address, kind, meta, qrCode } = props;

  const [qrcodeDataUrl, setQrcodeDataUrl ] = useState<string | undefined>();
  useEffect(() => {
    qrcode.toDataURL(qrCode, {
      color: { dark: colors.secondary, light: colors.background },
      margin: 0,
      scale: 6,
    }, (error, url) => {
      if (error) { return console.error(error) };
      setQrcodeDataUrl(url);
    });
  }, [qrCode]);

  return (
    <>
      <div className="wallet" onClick={() => navigator.clipboard.writeText(address) }>
        <img src={qrcodeDataUrl} />
        <div className="wallet-text-container">
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
          padding: 24px 0px 0px 24px;
        }
        .meta-container {
          display: flex;
          flex-direction: row;
          padding-top: 8px;
        }
        @media only screen and (max-width: 600px) {
          .wallet-text-container {
            padding-left: 0px;
          }
        }
      `}</style>
    </>
  );
}
