import React from 'react';

import BasePage from "../components/BasePage";
import Table from "../components/table/Table";
import TextHeader from "../components/text/TextHeader";
import TextSubheader from "../components/text/TextSubheader";
import TextLink from '../components/text/TextLink';
import TextStd from '../components/text/TextStd';

const GAME_RANKINGS = [
  [ "Beat Saber", "10", "2018", "Beat Games" ],
  [ "Celeste", "10", "2018", "Matt Makes Games" ],
  [ "DOOM: Eternal", "10", "2020", "iD Software" ],
  [ "Legend of Zelda: Breath of the Wild", "10", "2017", "Nintendo EPD" ],
  [ "What Remains of Edith Finch", "10", "2017", "Giant Sparrow" ],
  [ "Death Stranding", "9", "2019", "Kojima Productions" ],
  [ "Factorio", "9", "2016", "Wube Software"],
  [ "Hollow Knight", "9", "2017", "Team Cherry" ],
  [ "Ori and the Will of the Wisps", "9", "2020", "Moon Studios" ],
  [ "Outer Wilds", "9", "2019", "Mobius Digital" ],
  [ "Portal 2", "9", "2011", "Valve" ],
  [ "Supreme Commander: Forged Alliance", "9", "2007", "Gas Powered Games" ],
  [ "Team Fortress 2", "9", "2007", "Valve" ],
  [ "The Witcher 3: Wild Hunt", "9", "2015", "CD Projekt" ],
  [ "Bioshock: Infinite", "8", "2013", "Irrational" ],
  [ "Control", "8", "2019", "Remedy" ],
  [ "Dark Souls (Remastered)", "8", "2011", "From" ],
  [ "God of War", "8", "2018", "Santa Monica Studio" ],
  [ "Half Life: Alyx", "8", "2020", "Valve" ],
  [ "Ori and the Blind Forest", "8", "2015", "Moon Studios" ],
  [ "Red Dead Redemption 2", "8", "2018", "Rockstar" ],
  [ "Stardew Valley", "8", "2016", "Eric Barone" ],
  [ "Super Mario Odyssey", "8", "2017", "Nintendo EPD" ],
  [ "Tetris Effect", "8", "2018", "Resonair" ],
  [ "The Stanley Parable", "8", "2011", "Davey Wreden" ],
  [ "Undertale", "8", "2015", "Toby Fox" ],
  [ "Animal Crossing: New Horizons", "7", "2020", "Nintendo EPD" ],
  [ "Firewatch", "7", "2016", "Campo Santo" ],
  [ "Forager", "7", "2019", "Hopfrog" ],
  [ "Halo 5: Guardians", "7", "2015", "343 Industries" ],
  [ "Horizon: Zero Dawn", "7", "2017", "Guerrilla Games" ],
  [ "Minit", "7", "2018", "JW, Kitty, Jukio, and Dom" ],
  [ "Portal", "7", "2007", "Valve" ],
  [ "Satisfactory", "7", "2019", "Coffee Stain Studios" ],
  [ "Star Wars Jedi: Fallen Order", "7", "2020", "Respawn" ],
  [ "Fallout 4", "6", "2015", "Bethesda" ],
  [ "Life is Strange", "6", "2015", "Dontnod" ],
  [ "The Witness", "6", "2016", "Thekla" ],
  [ "Life is Strange: Before the Storm", "5", "2017", "Deck Nine" ],
  [ "Minecraft: Story Mode", "5", "2015", "Telltale" ],
];

const IndexPage = () => {
  return (
    <BasePage>
      <header>
        <TextHeader>gaming</TextHeader>
      </header>
      <br />
      <main>
        <div className="panel-container">
          <div className="panel panel-profiles">
            <div className="profile">
              <div className="profile-key">
                <TextSubheader>steam</TextSubheader>
              </div>
              <a href="https://steamdb.info/calculator/76561197984029462/?cc=us">
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
              <TextStd>passbyvalue</TextStd>
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
          </div>
          <div className="panel panel-rankings">
            <Table
              headers={{ cells: [ { v: "the best" }, { v: "score"}, { v: "released" }, { v: "developer" } ] }}
              rows={GAME_RANKINGS.map(ranking => ({
                cells: ranking.map(ri => ({ v: ri.toLowerCase() }))
              }))}
            />
          </div>
        </div>
      </main>
      <style jsx>{`
        .panel-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .panel {
          display: flex;
          flex-direction: column;
        }
        .panel-profiles {
          width: 40%;
        }
        .panel-rankings {
          width: 60%;
        }
        @media only screen and (max-width: 2100px) {
          .panel-profiles {
            width: auto;
          }
          .panel-rankings {
            padding-top: 24px;
            width: auto;
          }
        }
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
    </BasePage>
  );
}

export default IndexPage;
