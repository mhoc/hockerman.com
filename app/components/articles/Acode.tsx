import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ASeparator } from "./ASeparator";

export function Acode({ children, language }: { children: string; language?: string }) {
  return (
    <>
      <ASeparator />
      <SyntaxHighlighter
        codeTagProps={{ style: { fontSize: "0.75rem" } }}
        customStyle={{ border: "1px solid #02223C", borderRadius: "4px" }}
        language={language}
        style={nightOwl}
      >
        {children}
      </SyntaxHighlighter>
      <ASeparator />
    </>
  );
}
