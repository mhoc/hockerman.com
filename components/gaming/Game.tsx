import React from 'react';

import { Thumbnail } from "../img/Thumbnail";
import { TextDeemph, TextStd, TextSubheader } from "../text";

export interface GameModel {
  additionalSubtext?: string[];
  body?: string;
  dev?: string;
  platforms?: string[];
  thumbnailSrc?: string;
  title: string;
  year?: string;
}

interface Props {
  game: GameModel;
}

export const Game = ({ game: { additionalSubtext, body, dev, platforms, thumbnailSrc, title, year } }: Props) => {
  return (
    <>
      <div className="game">
        {thumbnailSrc ? <div className="thumb">
          <Thumbnail dim={body ? "150px" : "100px"} softenColors src={thumbnailSrc} />
        </div> : undefined}
        <div className="game-text">
          <div className="game-header-line">
            <span className="game-header-line-item">
              <TextSubheader>{title}</TextSubheader>
            </span>
            {year ? <span className="game-header-line-item hide-on-small">
              <TextStd>({year})</TextStd>
            </span> : undefined}
            {dev ? <span className="game-header-line-item">
              <TextStd>{dev}</TextStd>
            </span> : undefined}
          </div>
          <div className="game-header-line">
            {platforms ? <span className="game-header-line-item">
              <TextDeemph>
                {platforms.map((platform, i) => {
                  if (i > 0) return `, ${platform}`;
                  return platform;
                }).join("")}
              </TextDeemph>
            </span> : undefined}
          </div>
          {additionalSubtext ? additionalSubtext.map(subtext => (
            <div className="game-header-line hide-on-small">
              <span className="game-header-line-item">
                <TextDeemph key={`${title}${subtext}`}>{subtext}</TextDeemph>
              </span>
            </div>
          )) : undefined}
          <div className="item-body">
            <TextStd>{body}</TextStd>
          </div>
        </div>
      </div>
      <style jsx>{`
        .game {
          display: flex;
          flex-direction: row;
        }
        @media only screen and (max-width: 600px) {
          .game {
            align-items: center;
            flex-direction: column;
          }
        }
        .thumb {
          margin-right: 16px;
        }
        @media only screen and (max-width: 600px) {
          .thumb {
            margin-right: 0px;
            margin-bottom: 12px;
          }
        }
        .game-text {
          display: flex;
          flex-direction: column;
        }
        .game-header-line {
          align-items: center;
          display: flex;
          flex-direction: row;
        }
        .game-header-line-item {
          margin-right: 20px;
        }
        .item-body {
          margin-top: 12px;
        }
        @media only screen and (max-width: 600px) {
          .hide-on-small {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
