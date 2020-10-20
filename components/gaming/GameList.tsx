import React from 'react';

import { Game, GameModel } from "./Game";

interface Props {
  games: GameModel[];
}

export const GameList = ({ games }: Props) => {
  return (
    <div>
      {games.map(game => (
        <div key={game.title} style={{ marginBottom: "80px" }}>
          <Game game={game} />
        </div>
      ))}
    </div>
  );
}
