import React from 'react';

import TextLink from "../text/TextLink";
import TextStd from "../text/TextStd";
import TextSubheader from "../text/TextSubheader";

const GamingProfiles = () => (
  <>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>steam</TextSubheader>
      </div>
      <a href="https://steamprofile.com/sig/76561197984029462/">
        <img src="https://badges.steamprofile.com/profile/default/steam/76561197984029462.png" alt="Steam Profile badge for ryhr: Get your our own Steam Signature at SteamProfile.com" title="Steam Profile badge for ryhr: Get your our own Steam Signature at SteamProfile.com"/>
      </a>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>xbox</TextSubheader>
      </div>
      <a href="https://www.trueachievements.com/gamer/ryhre">
        <img src="https://www.trueachievements.com/gamercards/ryhre.png"/>
      </a>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>psn</TextSubheader>
      </div>
      <a href="https://psnprofiles.com/ryhr">
        <img src="https://card.psnprofiles.com/1/ryhr.png" />
      </a>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>discord</TextSubheader>
      </div>
      <TextStd>mhoc #0001</TextStd>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>nintendo</TextSubheader>
      </div>
      <TextStd>SW-1477-1299-8496</TextStd>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>riot</TextSubheader>
      </div>
      <TextStd>ryhr #NA0</TextStd>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>twitch</TextSubheader>
      </div>
      <TextLink href="https://twitch.tv/passbyvalue">passbyvalue</TextLink>
    </div>
    <style jsx>{`
      .profile {
        align-items: center;
        display: flex;
        flex-direction: row;
        padding-bottom: 8px;
      }
      .profile-key {
        padding-right: 16px;
        width: 100px;
      } 
    `}</style>
  </>
)

export default GamingProfiles;
