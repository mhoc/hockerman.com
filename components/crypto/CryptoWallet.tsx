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

const AVAILABLE_COLORS = [
  "#f48fb1",
  "#ef9a9a",
  "#ce93d8",
  "#b39ddb",
  "#9fa8da",
  "#90caf9",
  "#81d4fa",
  "#80deea",
  "#80cbc4",
  "#a5d6a7",
  "#c5e1a5",
  "#e6ee9c",
  "#fff59d",
  "#ffe082",
  "#ffcc80",
  "#ffab91",
]

// lol this is dumb
const Loader = () => {
  const color1 = AVAILABLE_COLORS[Math.floor(Math.random()*AVAILABLE_COLORS.length)];
  const color2 = AVAILABLE_COLORS[Math.floor(Math.random()*AVAILABLE_COLORS.length)]; 
  return (
    <>
      <div className="loader">
        <div className="row">
          <div className="cell cell-eye-container" id="cell00">
            <div className="cell-eye" id="cell00-eye">
              <div className="cell-pupil" id="cell00-pupil" />
            </div>
          </div>
          <div className="cell" id="cell01" />
          <div className="cell" id="cell02" />
          <div className="cell" id="cell03" />
          <div className="cell cell-eye-container" id="cell04">
            <div className="cell-eye" id="cell04-eye">
              <div className="cell-pupil" id="cell04-pupil" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cell" id="cell10" />
          <div className="cell" id="cell11" />
          <div className="cell" id="cell12" />
          <div className="cell" id="cell13" />
          <div className="cell" id="cell14" />
        </div>
        <div className="row">
          <div className="cell" id="cell20" />
          <div className="cell" id="cell21" />
          <div className="cell" id="cell22" />
          <div className="cell" id="cell23" />
          <div className="cell" id="cell24" />
        </div>
        <div className="row">
          <div className="cell" id="cell30" />
          <div className="cell" id="cell31" />
          <div className="cell" id="cell32" />
          <div className="cell" id="cell33" />
          <div className="cell" id="cell24" />
        </div>
        <div className="row">
          <div className="cell cell-eye-container" id="cell40">
            <div className="cell-eye" id="cell40-eye">
              <div className="cell-pupil" id="cell40-pupil" />
            </div>
          </div>
          <div className="cell" id="cell41" />
          <div className="cell" id="cell42" />
          <div className="cell" id="cell43" />
          <div className="cell" id="cell44" />
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
          animation-direction: alternate;
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-name: mosaic-ripple;
          height: 40px;
          width: 40px;
        }
        
        #cell00 { animation-delay: 0.2s; }
        #cell01, #cell10 { animation-delay: 0.3s; }
        #cell02, #cell11, #cell20 { animation-delay: 0.4s; }
        #cell03, #cell12, #cell21, #cell30 { animation-delay: 0.5s; }
        #cell04, #cell40, #cell13, #cell22, #cell31 { animation-delay: 0.6s }
        #cell14, #cell23, #cell32, #cell41 { animation-delay: 0.7s; }
        #cell24, #cell33, #cell42 { animation-delay: 0.8s; }
        #cell34, #cell43 { animation-delay: 0.9s; }
        #cell44 { animation-delay: 1.0s; }

        .cell-eye-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cell-eye {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${colors.background};
          width: 28px;
          height: 28px;
        }

        .cell-pupil {
          animation-direction: alternate;
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-name: mosaic-ripple;
          background-color: ${colors.background};
          width: 20px;
          height: 20px;
        }
        #cell00-pupil { animation-delay: 0.2s; }
        #cell04-pupil, #cell40-pupil { animation-delay: 0.6s; }
        
        @keyframes mosaic-ripple {
          0% { background-color: ${color1}; }
          50% { background-color: ${colors.secondary}; }
          100% { background-color: ${color2}; }
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
      setTimeout(() => setQrcodeDataUrl(url), 2000);
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
