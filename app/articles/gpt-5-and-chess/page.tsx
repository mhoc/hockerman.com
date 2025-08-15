import { Aa } from "@/app/components/articles/Aa";
import { Acode } from "@/app/components/articles/Acode";
import { Ah1 } from "@/app/components/articles/Ah1";
import { Ap } from "@/app/components/articles/Ap";
import { ArticleLayout } from "@/app/components/articles/ArticleLayout";
import { ATextConversation } from "@/app/components/articles/ATextConversation";
import { ATextConversationMessage } from "@/app/components/articles/ATextConversationMessage";
import { move6cot } from "./move6cot";

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
      <Ap>
        I am playing White and thus going first, only because it enables me to leverage the Chess.com Analysis engine
        (Stockfish 16 Fast ~3270 ELO) to play for me. My moves will always be the analysis {"engine's"} top-rated move.
        I am not necessarily grading {"ChatGPT's"} skill at chess yet; just that it can play chess at all. {"I'm"}
        personally horrible at Chess.
      </Ap>
      <ATextConversation>
        <ATextConversationMessage sender="user">
          rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
        </ATextConversationMessage>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">
          rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2
        </ATextConversationMessage>
        <ATextConversationMessage sender="user">
          rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2
        </ATextConversationMessage>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">
          rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3
        </ATextConversationMessage>
        <ATextConversationMessage sender="user">
          rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3
        </ATextConversationMessage>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">
          rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4
        </ATextConversationMessage>
      </ATextConversation>
      <Ap>
        So far, the FEN strings provided are syntactically valid, the moves it makes are legal, and it correctly
        maintains the state of the board as we progress. On {"GPT-5's"} third move, it captured a pawn which Stockfish
        had exposed; interesting that it recommended that move, but what do I know about chess. Onward.
      </Ap>
      <ATextConversation>
        <ATextConversationMessage sender="user">
          rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4
        </ATextConversationMessage>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">
          rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5
        </ATextConversationMessage>
        <ATextConversationMessage sender="user">
          rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 2 5
        </ATextConversationMessage>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">
          rnbqkb1r/pp1ppp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6
        </ATextConversationMessage>
      </ATextConversation>
      <Ap>
        {"Stockfish's"} fourth move added clarity to why it sacrificed the pawn in the third move; it baited their pawn
        into being captured by our knight. Always trust Stockfish.
      </Ap>
      <Ap>
        {"GPT-5's"} fifth move constituted an illegal play. It correctly moved the G7 pawn to G6, but it additionally
        hallucinated a new pawn for itself on D7.
      </Ap>
      <Ah1 id="interrogating-the-illegal-move">Interrogating the Illegal Move</Ah1>
      <Ap>{"I'm"} going to continue the conversation into interrogating it on the illegal move.</Ap>
      <ATextConversation>
        <ATextConversationMessage sender="user">
          Your move has been identified as illegal. Do you concur?
        </ATextConversationMessage>
        <ATextConversationMessage
          meta={move6cot}
          metaLabel="[Thinking Output]"
          sender="ai"
          senderLabel="GPT-5 Thinking"
        >
          rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6
        </ATextConversationMessage>
      </ATextConversation>
      <Ap>{"That's"} fair; I did tell it to only respond with FEN notation.</Ap>
      <Ap>
        The FEN notation it replied with correctly removed the hallucinated pawn on D7, putting the game back into a
        playable state. It thought for 1m21s to achieve this outcome, which was significantly longer than it took to
        think through previous moves (ranging from 16s-45s).
      </Ap>
      <Ap>
        This outcome indicates that a full and valid game may be possible with proper prompting. A harness around GPT-5
        which can detect invalid moves and course-correct the model may also be necessary.
      </Ap>
      <Ap>
        However, given that I was unable to achieve a valid one-shot game, this experiment cannot proceed to the second
        phase. Future experiments in this domain may be refocused on building this harness and getting the LLM into a
        state where it can actually play.
      </Ap>
      <Ah1 id="can-gpt5-detect-illegal-moves">Can GPT-5 Detect Illegal Moves?</Ah1>
      <Ap>
        Given that ChatGPT was capable of course-correcting its own illegal move, would it be capable of detecting
        illegal moves that the player makes? To test this hypothesis, {"I've"} started a new thread of conversation.
      </Ap>
      <ATextConversation>
        <ATextConversationMessage sender="user">
          You are a grandmaster chess player well-versed in both playing chess and Forsyth-Edwards Notation. You are
          playing a game of chess against a skilled opponent, and your goal is to beat this opponent. In subsequent
          messages, the board state will be communicated to you using FEN notation. You must respond with only the FEN
          notation of the board state after you have made your move, or a statement that the {"user's"} move is illegal
          if you believe it to be.
        </ATextConversationMessage>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">
          Understood—send the first FEN.
        </ATextConversationMessage>
      </ATextConversation>
      <Ap>
        For this game, I will be playing without Stockfish, and giving it purposefully different moves than the last
        experiment. My third move will be illegal, by moving {"GPT-5's"} knight from F6 to G6. This is illegal both from
        the perspective that I cannot play {"GPT-5's"} pieces, and that the movement for the Knight is invalid.
      </Ap>
    </ArticleLayout>
  );
}
