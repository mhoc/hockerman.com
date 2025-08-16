import { AIChess } from "./AIChess";

export default function Chess() {
  return (
    <div className="flex flex-col gap-4 p-16 max-w-2xl">
      <span className="text-sm text-cobalt-200">
        This is a small project which allows you to play chess against an LLM. You must provide your
        own OpenAI API key. This API key does not leave your browser beyond being used directly for
        API calls to OpenAI, and is disposed of when you close the tab.
      </span>
      <AIChess />
    </div>
  );
}
