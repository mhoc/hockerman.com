import React from 'react';

import { TextDeemph, TextLink, TextStd, TextSubheader } from "../text";

const GamingProfiles = () => (
  <>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>discord</TextSubheader>
      </div>
      <TextStd>mhoc&nbsp;</TextStd>
      <TextDeemph>#0001</TextDeemph>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>epic</TextSubheader>
      </div>
      <TextStd>aka_ryhr</TextStd>
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
        <TextSubheader>psn</TextSubheader>
      </div>
      <TextLink href="https://psnprofiles.com/ryhr">ryhr</TextLink>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>riot</TextSubheader>
      </div>
      <TextStd>empath&nbsp;</TextStd>
      <TextDeemph>#000</TextDeemph>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>steam</TextSubheader>
      </div>
      <TextLink href="https://steamcommunity.com/id/ryhr/">ryhr</TextLink>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>twitch</TextSubheader>
      </div>
      <TextLink href="https://twitch.tv/passbyvalue">passbyvalue</TextLink>
    </div>
    <div className="profile">
      <div className="profile-key">
        <TextSubheader>xbox</TextSubheader>
      </div>
      <TextStd>ryhre</TextStd>
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
