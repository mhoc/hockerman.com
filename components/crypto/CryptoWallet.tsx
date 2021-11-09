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

// lol this is dumb
const Loader = () => {
  return (
    <>
      <div className="loader">
        <div className="row">
          <div className="cell" id="cell00" />
          <div className="cell" id="cell01" />
          <div className="cell" id="cell02" />
          <div className="cell" id="cell03" />
        </div>
        <div className="row">
          <div className="cell" id="cell10" />
          <div className="cell" id="cell11" />
          <div className="cell" id="cell12" />
          <div className="cell" id="cell13" />
        </div>
        <div className="row">
          <div className="cell" id="cell20" />
          <div className="cell" id="cell21" />
          <div className="cell" id="cell22" />
          <div className="cell" id="cell23" />
        </div>
        <div className="row">
          <div className="cell" id="cell30" />
          <div className="cell" id="cell31" />
          <div className="cell" id="cell32" />
          <div className="cell" id="cell33" />
        </div>
      </div>
      <style jsx>{`
        .loader {
          display: flex;
          flex-direction: column;
        }
        .row {
          display: flex;
          flex-direction: row;
        }
        .cell {
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-name: mosaic-ripple;
          height: 50px;
          width: 50px;
        }
        #cell00 { animation-delay: 0s; }
        #cell01, #cell10 { animation-delay: 0.1s; }
        #cell02, #cell11, #cell20 { animation-delay: 0.2s; }
        #cell03, #cell12, #cell21, #cell30 { animation-delay: 0.3s; }
        #cell13, #cell22, #cell31 { animation-delay: 0.4s; }
        #cell23, #cell32 { animation-delay: 0.5s; }
        #cell33 { animation-delay: 0.6s; }
        @keyframes mosaic-ripple {
          0% { background-color: ${colors.background}; }
          50% { background-color: ${colors.secondary}; }
          100% { background-color: ${colors.background}; }
        }
      `}</style>
    </>
  )
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
      // who doesn't like intentionally lengthened load sequences to showcase a cool loading animation
      setTimeout(() => setQrcodeDataUrl(url), 1500);
    });
  }, [qrCode]);

  return (
    <>
      <div className="wallet" onClick={() => navigator.clipboard.writeText(address) }>
        {qrcodeDataUrl
          ? <img className="qrcode" src={qrcodeDataUrl} />
          : <Loader />
        }
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
        .qrcode {
          height: 200px;
          width: 200px;
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
