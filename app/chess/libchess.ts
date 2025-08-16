export type ChessPlayer = "w" | "b";
export type ChessPiece = "r" | "R" | "n" | "N" | "b" | "B" | "q" | "Q" | "k" | "K" | "p" | "P";
export type EmptyCell = "E";

export type ChessBoard = (ChessPiece | EmptyCell)[][];

export type ChessCastlingAvailability = {
  k: boolean;
  q: boolean;
}

export type ChessGameState = {
  board: ChessBoard;
  castling: {
    b: ChessCastlingAvailability;
    w: ChessCastlingAvailability;
  };
  enPassant: string | false;
  fullmoveClock: number;
  halfmoveClock: number;
  player: ChessPlayer;
}

export function fenToChessGameState(fen: string): ChessGameState {
  // rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
  // rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2
  const fenSplit = fen.split(" ");
  if (fenSplit.length !== 6) {
    throw new Error(`invalid fen provided: expected 6 space-separated components`);
  }
  const [ board, player, castling, enPassant, halfmoveClock, fullmoveClock ] = fenSplit;
  const boardSplit = board.split("/");
  if (boardSplit.length !== 8) {
    throw new Error(`invalid fen provided: expected 8 rows in board state`);
  }
  const [ row8, row7, row6, row5, row4, row3, row2, row1 ] = boardSplit;
  const parseRow = (row: string): (ChessPiece | EmptyCell)[] => {
    const rowParsed: (ChessPiece | EmptyCell)[] = [];
    let counter = 0;
    for (const char of row) {
      switch (char) {
        case "r":
        case "n":
        case "b":
        case "q":
        case "k":
        case "p":
        case "R":
        case "N":
        case "B":
        case "Q":
        case "K":
        case "P":
          rowParsed.push(char);
          counter++;
          break;
        default:
          let emptyCount;
          try {
            emptyCount = parseInt(char);
          } catch {
            throw new Error(`invalid fen provided: invalid board state character ${char}`);
          }
          for (let i = 0; i < emptyCount; i++) {
            rowParsed.push("E");
            counter++;
          }
      }
    }
    if (counter !== 8) {
      throw new Error(`invalid fen provided: ${counter} characters were provided in the row ${row}`);
    }
    return rowParsed;
  }
  if (player !== "w" && player !== "b") {
    throw new Error(`invalid fen string provided: active player ${player} not recognized`);
  }
  if (castling.length !== 4) {
    throw new Error(`invalid fen string provided: castling component ${castling} has invalid length`);
  }
  const whiteKingCastleAvailable = castling[0] === "K";
  const whiteQueenCastleAvailable = castling[1] === "Q";
  const blackKingCastleAvailable = castling[2] === "k";
  const blackQueenCastleAvailable = castling[3] === "q";
  let parsedEnPassant: string | false;
  if (enPassant.length === 1) {
    parsedEnPassant = false;
  } else if (enPassant.length === 2) {
    parsedEnPassant = enPassant;
  } else {
    throw new Error(`invalid fen string provided: en passant is of length ${enPassant}`);
  }
  let parsedHalfmoveClock;
  try {
    parsedHalfmoveClock = parseInt(halfmoveClock);
  } catch {
    throw new Error(`invalid fen string provided: halfmove clock is not a number`);
  }
  let parsedFullmoveClock;
  try {
    parsedFullmoveClock = parseInt(fullmoveClock);
  } catch {
    throw new Error(`invalid fen string provided: fullmove clock is not a number`);
  }
  return {
    board: [
      parseRow(row8),
      parseRow(row7),
      parseRow(row6),
      parseRow(row7),
      parseRow(row6),
      parseRow(row5),
      parseRow(row4),
      parseRow(row3),
      parseRow(row2),
      parseRow(row1),
    ],
    castling: {
      b: {
        k: blackKingCastleAvailable,
        q: blackQueenCastleAvailable,
      },
      w: {
        k: whiteKingCastleAvailable,
        q: whiteQueenCastleAvailable,
      },
    },
    enPassant: parsedEnPassant,
    fullmoveClock: parsedFullmoveClock,
    halfmoveClock: parsedHalfmoveClock,
    player,
  }
}

export const initialChessBoard: ChessGameState = {
  board: [
    [ "r", "n", "b", "q", "k", "b", "n", "r" ],
    [ "p", "p", "p", "p", "p", "p", "p", "p" ],
    [ "E", "E", "E", "E", "E", "E", "E", "E" ],
    [ "E", "E", "E", "E", "E", "E", "E", "E" ],
    [ "E", "E", "E", "E", "E", "E", "E", "E" ],
    [ "E", "E", "E", "E", "E", "E", "E", "E" ],
    [ "P", "P", "P", "P", "P", "P", "P", "P" ],
    [ "R", "N", "B", "Q", "K", "B", "N", "R" ]
  ],
  castling: {
    b: {
      k: true,
      q: true,
    },
    w: {
      k: true,
      q: true,
    },
  },
  enPassant: false,
  fullmoveClock: 0,
  halfmoveClock: 0,
  player: "w",
};
