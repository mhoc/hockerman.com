import React from 'react';

import Table from '../table/Table';

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

const GamingRankingsTable = () => (
  <Table
    headers={{ cells: [ { v: "the best" }, { v: "score"}, { elidible: true, v: "released" }, { elidible: true, v: "developer" } ] }}
    rows={GAME_RANKINGS.map(ranking => ({
      cells: ranking.map((ri, rii) => ({
        elidible: rii === 2 || rii === 3,
        v: ri.toLowerCase(),
      }))
    }))}
  />
);

export default GamingRankingsTable;
