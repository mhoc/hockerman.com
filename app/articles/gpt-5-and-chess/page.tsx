import { Aa } from "@/app/components/articles/Aa";
import { Acode } from "@/app/components/articles/Acode";
import { Ah1 } from "@/app/components/articles/Ah1";
import { Ap } from "@/app/components/articles/Ap";
import { ArticleLayout } from "@/app/components/articles/ArticleLayout";
import { ATextConversation } from "@/app/components/articles/ATextConversation";
import { ATextConversationMessage } from "@/app/components/articles/ATextConversationMessage";

const toc = [
  { label: "Validating Baseline Competence", href: "#validating-baseline-competence" },
  { label: "Interrogating the Illegal Move", href: "#interrogating-the-illegal-move" },
  { label: "Can GPT-5 Detect Illegal Moves?", href: "#can-gpt5-detect-illegal-moves" },
  { label: "Can GPT-5 Resist False Accusation?", href: "#can-gpt5-resist-false-accusation" },
  { label: "Ending the Game", href: "#ending-the-game" },
  { label: "Conslusions", href: "#conclusions" },
  { label: "Followups", href: "#followups" },
];

export default function GPT5AndChess() {
  return (
    <ArticleLayout date="2025-08-13" title="GPT-5 and Chess" toc={toc}>
      <Ap>
        With the recent release of GPT-5, I am curious how its ability to play chess has improved, if it is capable of
        at least playing a valid game of chess, and where its skill ranks against more specialized chess engines.
      </Ap>
      <Ap>
        My goal with this write-up is, first, to validate a baseline level of competence to ensure this investigation is
        worthwhile. After that, we may expand the testing by automating play between GPT-5 and a modern chess engine
        like Stockfish.
      </Ap>
      <Ah1 id="validating-baseline-competence">Validating Baseline Competence</Ah1>
      <Ap>
        Chess boards can be represented in text using{" "}
        <Aa href="https://www.chess.com/terms/fen-chess">Forsyth-Edwards Notation</Aa> (or FEN). For example, the FEN
        string for a starting chess board looks like:
      </Ap>
      <Acode>rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1</Acode>
      <Ap>
        To establish that this pursuit is even worthwhile, we can use ChatGPT to get a baseline level of {"GPT-5's "}
        competence in playing chess. These tests were completed on 2025-08-13 using a ChatGPT Plus subscription & the
        model set to ChatGPT 5 Thinking. The following un-optimized prompt was used:
      </Ap>
      <ATextConversation>
        <ATextConversationMessage sender="user">
          You are a grandmaster chess player well-versed in both playing chess and Forsyth-Edwards Notation. You are
          playing a game of chess against a skilled opponent, and your goal is to beat this opponent. In subsequent
          messages, the board state will be communicated to you using FEN notation. You must respond with only the FEN
          notation of the board state after you have made your move.
        </ATextConversationMessage>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">
          Ready—send the current FEN position and I’ll reply with the updated FEN after my move.
        </ATextConversationMessage>
      </ATextConversation>
      <Ap>
        {"I'm"} using <Aa href="https://www.chess.com/analysis">{"Chess.com's"} Analysis Mode</Aa> to visualize the game
        state at every turn to understand if its making legal moves. An LLM may be able to quickly read these FEN
        strings, but I cannot.
      </Ap>
    </ArticleLayout>
  );
}
