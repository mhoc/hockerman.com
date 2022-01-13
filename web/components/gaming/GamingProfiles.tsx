import React from 'react';

import { TextLink, TextStd, TextSubheader } from "../text";

const GamingProfiles = () => (
  <>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>psn</TextSubheader>
      </div>
      <a href="https://psnprofiles.com/ryhr">
        <img className="profile-card" src="https://card.psnprofiles.com/1/ryhr.png" />
      </a>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>steam</TextSubheader>
      </div>
      <a href="https://steamprofile.com/sig/76561197984029462/">
        <img className="profile-card" src="https://badges.steamprofile.com/profile/default/steam/76561197984029462.png" />
      </a>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>xbox</TextSubheader>
      </div>
      <a href="https://www.trueachievements.com/gamer/ryhre">
        <img className="profile-card" src="https://www.trueachievements.com/gamercards/ryhre.png"/>
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
        <TextSubheader>epic</TextSubheader>
      </div>
      <TextStd>passbyvalue</TextStd>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>nintendo</TextSubheader>
      </div>
      <TextStd>SW-1477-1299-8496</TextStd>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>origin</TextSubheader>
      </div>
      <TextStd>aka_ryhr</TextStd>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>riot</TextSubheader>
      </div>
      <TextStd>empath #000</TextStd>
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
      .profile-card {
        max-width: 400px;
      }
      .profile-key {
        padding-right: 16px;
        width: 100px;
      } 
    `}</style>
  </>
)

export default GamingProfiles;
