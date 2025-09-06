import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ASeparator } from "./ASeparator";

export function Acode({ children, language }: { children: string | string[]; language?: string }) {
  return (
    <>
      <ASeparator />
      <SyntaxHighlighter
        codeTagProps={{ style: { fontSize: "0.9rem" } }}
        customStyle={{ border: "1px solid #02223C", borderRadius: "4px", minHeight: "24px" }}
        language={language}
        style={nightOwl}
      >
        {children}
      </SyntaxHighlighter>
      <ASeparator />
    </>
  );
}
