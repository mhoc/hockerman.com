import { useState } from "react";
import { type ChessGameState, initialChessBoard } from "./libchess";

export function ChessBoard() {
  const [gameState, setGameState] = useState<ChessGameState>(initialChessBoard);
}
