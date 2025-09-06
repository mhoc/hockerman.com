import { useMemo } from "react";
import { Aa } from "~/components/articles/Aa";
import { Acode } from "~/components/articles/Acode";
import { Ah1 } from "~/components/articles/Ah1";
import { Ap } from "~/components/articles/Ap";
import { ATextConversation } from "~/components/articles/ATextConversation";
import { ATextConversationMessage } from "~/components/articles/ATextConversationMessage";
import { ArticleLayout } from "~/layouts/ArticleLayout";

import finalSpecification from "./finalSpecification.md?raw";
import fullInterpreter from "./fullInterpreter.md?raw";

const toc = [
  {
    label: "Our Toy Language",
    href: "#our-toy-language",
  },
  {
    label: "Evaluating the Model",
    href: "#evaluating-the-model",
  },
  {
    label: "Printing Hello World",
    href: "#printing-hello-world",
  },
  {
    label: "Two Sum v1",
    href: "#two-sum-v1",
  },
  {
    label: "Two Sum v2",
    href: "#two-sum-v2",
  },
  {
    label: "Two Sum v3",
    href: "#two-sum-v3",
  },
  {
    label: "Building an Interpreter",
    href: "#building-an-interpreter",
  },
  {
    label: "Conclusions",
    href: "#conclusions",
  },
  {
    label: "Followups",
    href: "#followups",
  },
  {
    label: "Final Specification",
    href: "#final-specification",
  },
  {
    label: "Full Interpreter Code",
    href: "#full-interpreter-code",
  }
]

const m1 = `
I'm working with a really weird programming language right now, and I need some help. This is the language specification for the language:
\`\`\`
$SPECIFICATION
\`\`\``;

const m2 = `
\`\`\`
program   := stmt+
stmt      := assign | call
assign    := (literal | var | call) " -->> " var
call      := fname " % " arg ( " % " arg )*
fname     := "f_plus" | "f_minus" | "f_times" | "f_div" | "f_say"
arg       := literal | var
literal   := "n" DIGITS | "nn" DIGITS
var       := "v" DIGITS
\`\`\``;

const m3 = `
Short answer: you can't. NTL-01 has no strings, and \`f_say\` only prints a **Number** (literal or variable).

Closest you can get is emitting code points (e.g., ASCII) that a host could interpret. For “hello world”:

\`\`\`
n104 -->> v1 ; h
f_say % v1
n101 -->> v1 ; e
f_say % v1
n108 -->> v1 ; l
f_say % v1
n108 -->> v1 ; l
f_say % v1
n111 -->> v1 ; o
f_say % v1
n32 -->> v1  ; space
f_say % v1
n119 -->> v1 ; w
f_say % v1
n111 -->> v1 ; o
f_say % v1
n114 -->> v1 ; r
f_say % v1
n108 -->> v1 ; l
f_say % v1
n100 -->> v1 ; d
f_say % v1
\`\`\`

If you control the runtime, you'd need an extension like \`f_say_str % <codes...>\` or a mapping so printed numbers render as characters.
`;

const m4 = `
Here's my problem I'm trying to solve: 
          
Given an array of integers \`nums\` and an integer \`target\`, print indices of the two numbers such that they add up to \`target\`.

You may assume that the variable v1 is already defined and contains the array 'nums', and the variable v2 is already defined and contains the number value 'target'.
`;

const m5 = `
Short version: with NTL-01 exactly as specified, you can't implement a general Two-Sum that _conditionally_ prints only the two matching indices. The language has no comparison, branching, or looping, and array indexing is only exemplified with literals—so you can't iterate pairs or test “== target”.

That said, here are two practical ways forward:

## 1) If you just need the answer for _your current_ \`v1\` and \`v2\`

Tell me the concrete contents of \`v1\` and \`v2\`, and I'll compute the indices and give you a tiny program that simply prints those two index numbers (no runtime search needed).

## 2) “Pair dump” workaround (no branching)

You can print every pair \`(i,j)\` along with \`target − (nums[i]+nums[j])\`. The correct pair is the one whose printed **difference is \`0\`**. This works within the spec (only arithmetic + \`f_say\`). Below is a template for arrays of length **4** (adjust by adding/removing blocks if your array is longer/shorter). It assumes \`v1\` holds the array and \`v2\` holds the target.

\`\`\`
-- v1: nums[], v2: target

-- Pull the first 4 elements out (requires len(v1) >= 4)
v1{n1 -->> v3
v1{n2 -->> v4
v1{n3 -->> v5
v1{n4 -->> v6

-- Pair (1,2)
f_plus % v3 % v4 -->> v7
f_minus % v2 % v7 -->> v8
f_say % n1
f_say % n2
f_say % v8

-- Pair (1,3)
f_plus % v3 % v5 -->> v9
f_minus % v2 % v9 -->> v10
f_say % n1
f_say % n3
f_say % v10

-- Pair (1,4)
f_plus % v3 % v6 -->> v11
f_minus % v2 % v11 -->> v12
f_say % n1
f_say % n4
f_say % v12

-- Pair (2,3)
f_plus % v4 % v5 -->> v13
f_minus % v2 % v13 -->> v14
f_say % n2
f_say % n3
f_say % v14

-- Pair (2,4)
f_plus % v4 % v6 -->> v15
f_minus % v2 % v15 -->> v16
f_say % n2
f_say % n4
f_say % v16

-- Pair (3,4)
f_plus % v5 % v6 -->> v17
f_minus % v2 % v17 -->> v18
f_say % n3
f_say % n4
f_say % v18
\`\`\`

Read the output in triples. For the triple where the third number is \`n0\`, the first two numbers are the indices you want.

---

### Why the true conditional solution isn't possible here

- No equality or comparison operator to test \`sum == target\`.
- No branching/conditionals to print only the matching indices.
- No loops to scan the array length returned by \`f_size\`.
- Arrays can only be appended to; you can’t construct an arbitrary lookup table keyed by \`target\`.

If you're open to _minimal_ extensions, adding just one of these would make Two-Sum doable:

- \`f_eq % a % b\` → returns \`n1\` or \`n0\`
- \`f_if % cond % thenVal % elseVal\` (or any branching form)
- Allow indexing with a variable (e.g., \`vA{vI}\`) **plus** some comparison or branching

Otherwise, share your concrete \`v1\`/\`v2\` and I’ll hand you the exact two indices and a tiny NTL-01 snippet that prints them.
`;

const m6 = `
Here's my problem I'm trying to solve:

Given an array of integers \`nums\` and an integer \`target\`, print _indices of the two numbers such that they add up to \`target\`_.

You may assume that the variable v1 is already defined and contains the array 'nums', and the variable v2 is already defined and contains the number value 'target'.
`;

const m7 = `
Got it — here's a straight-line NTL-01 “two-sum” that works when \`nums\` (in \`v1\`) has length **2-4**. It prints **1-based** indices for every matching pair. (NTL-01 has no loops, so we gate per length using \`f_size\` and \`when\`.)

\`\`\`
f_size % v1 -->> v3         -- v3 = length(nums)
v3 = n2 -->> v4             -- is length 2?
v3 = n3 -->> v5             -- is length 3?
v3 = n4 -->> v6             -- is length 4?

-- length == 2
when v4 f_plus % v1{n1 % v1{n2 -->> v7
when v4 v7 = v2 -->> v8
when v4 when v8 f_say % n1
when v4 when v8 f_say % n2

-- length == 3
when v5 f_plus % v1{n1 % v1{n2 -->> v9
when v5 v9 = v2 -->> v10
when v5 when v10 f_say % n1
when v5 when v10 f_say % n2

when v5 f_plus % v1{n1 % v1{n3 -->> v11
when v5 v11 = v2 -->> v12
when v5 when v12 f_say % n1
when v5 when v12 f_say % n3

when v5 f_plus % v1{n2 % v1{n3 -->> v13
when v5 v13 = v2 -->> v14
when v5 when v14 f_say % n2
when v5 when v14 f_say % n3

-- length == 4
when v6 f_plus % v1{n1 % v1{n2 -->> v15
when v6 v15 = v2 -->> v16
when v6 when v16 f_say % n1
when v6 when v16 f_say % n2

when v6 f_plus % v1{n1 % v1{n3 -->> v17
when v6 v17 = v2 -->> v18
when v6 when v18 f_say % n1
when v6 when v18 f_say % n3

when v6 f_plus % v1{n1 % v1{n4 -->> v19
when v6 v19 = v2 -->> v20
when v6 when v20 f_say % n1
when v6 when v20 f_say % n4

when v6 f_plus % v1{n2 % v1{n3 -->> v21
when v6 v21 = v2 -->> v22
when v6 when v22 f_say % n2
when v6 when v22 f_say % n3

when v6 f_plus % v1{n2 % v1{n4 -->> v23
when v6 v23 = v2 -->> v24
when v6 when v24 f_say % n2
when v6 when v24 f_say % n4

when v6 f_plus % v1{n3 % v1{n4 -->> v25
when v6 v25 = v2 -->> v26
when v6 when v26 f_say % n3
when v6 when v26 f_say % n4
\`\`\`

Notes:

- Outputs are two lines per solution (first index then second), **1-based**.
- Safe indexing: we only touch \`v1{nK\` inside a \`when\` block that matches the exact length, since NTL-01 lacks \`<=\` to guard bounds.
- Want a bigger limit? Say the max length (e.g., 6, 8, 10) and I'll emit an expanded version auto-unrolled for you.
`;

const m8 = `
Here's my problem I'm trying to solve:

Given an array of integers \`nums\` and an integer \`target\`, print _indices of the two numbers such that they add up to \`target\`_.

You may assume that the variable v1 is already defined and contains the array 'nums', and the variable v2 is already defined and contains the number value 'target'.
`;

const m9 = `
Here's a straight-up NTL-01 “two-sum” that assumes at least one valid pair exists.  
\`v1\` is the array, \`v2\` is the target. It prints the **1-based** indices.

\`\`\`
n0 -->> v3
n0 -->> v4

scan v1 v5 scan v1 v6 when f_minus % v6 % v5 when f_plus % v1{v5 % v1{v6 = v2 v5 % v6 -->> v7

f_say % v7{n1
f_say % v7{n2
\`\`\`

### How it works (brief)

- \`v5\` and \`v6\` iterate all index pairs via nested \`scan\`.
- \`when f_minus % v6 % v5\` ensures \`v6 > v5\` so we don’t pair an element with itself or repeat pairs.
- \`when f_plus % v1{v5 % v1{v6 = v2\` checks if the two values sum to the target.
- On a match, it assigns the pair of indices to \`v7\` as an array \`[v5, v6]\`, then after the scans it prints them.

Want zero-based indices instead? Replace the two \`f_say\` lines with:

\`\`\`
f_say % f_minus % v7{n1 % n1
f_say % f_minus % v7{n2 % n1
\`\`\`
`;

const m10 = `
\`\`\`
// NTL-01 JavaScript Interpreter
// --------------------------------
// Spec recap (abbrev):
// - Numbers: n42, nn12 (negative). Floats only via f_div.
// - Vars: v1, v2, ... must be *declared/assigned* in increasing order.
// - Assign: <expr> -->> vK
// - Comparisons: x = y  |  x n= y  → numeric truth (1 or 0)
// - when <literal|var> <statement>
// - Functions: f_plus, f_minus, f_times, f_div, f_say, f_size
//   Call syntax: f_name % arg1 % arg2 ... (args are literals or vars or array 

--- OMITTING 400+ LINES OF CODE ---
--- The full, working parser will be included at the bottom of this page ---

// ----- Example usage (uncomment to try in Node) -----
// const src = \`
// n5 -->> v1
// n6 -->> v2
// v1 = v2 -->> v3
// when v3 f_say % v1
// n1 % n2 % n3 -->> v4
// scan v4 v5 f_say % v4{v5
// v4 + n9
// f_say % v4{n4
// f_size % v4 -->> v6
// f_div % n1 % n2 -->> v7
// \`;
// const itp = new NTL01Interpreter({ trace: true, onSay: x => console.log('say:', x) });
// const res = itp.run(src);
// console.log(res);
\`\`\`
`;

const m11 = `say: 1
say: 2
say: 3
say: 9
/home/mike/ntl01.js:324
    throw new Error(\`NTL parse error (line \${t.line}): \${msg}\`);
    ^

Error: NTL parse error (line 10): Unexpected tokens after end of statement
`;

const m12 = `
Good catch — that was on me. The parser treated any line starting with a function (like \`f_size % v4 -->> v6\`) as a **stand-alone call**, so when it later saw the \`-->> v6\` it threw “Unexpected tokens after end of statement.”

I’ve fixed the parser in the canvas:

- It now **parses an expression first**, then:
    
    - If it sees \`-->> vK\`, it treats it as an **assignment**.
        
    - Otherwise, it only allows a **bare function call** (like \`f_say ...\`) as a statement.
        
- Append detection (\`vX + <term>\`) still works as before.
    
Pull the updated code from the canvas and re-run your sample — line 10 (\`f_size % v4 -->> v6\`) will parse and execute correctly now. Want me to add a few parser unit tests in the file so regressions like this don't sneak back in?
`;

const m13 = `➜  mike $ node ntl01.js
say: 1
say: 2
say: 3
say: 9
{
  vars: { v1: 5, v2: 6, v3: 0, v4: [ 1, 2, 3, 9 ], v5: 3, v6: 4, v7: 0.5 },
  outputs: [ 1, 2, 3, 9 ],
  trace: [
    { line: 2, msg: 'assign v1 = 5' },
    { line: 3, msg: 'assign v2 = 6' },
    { line: 4, msg: 'assign v3 = 0' },
    { line: 5, msg: 'when cond=0' },
    { line: 6, msg: 'assign v4 = [1, 2, 3]' },
    { line: 7, msg: 'declare v5 for scan' },
    { line: 7, msg: 'scan v4[1] (index var v5=1)' },
    { line: 7, msg: 'call f_say → void' },
    { line: 7, msg: 'scan v4[2] (index var v5=2)' },
    { line: 7, msg: 'call f_say → void' },
    { line: 7, msg: 'scan v4[3] (index var v5=3)' },
    { line: 7, msg: 'call f_say → void' },
    { line: 8, msg: 'append v4 + 9 (new length 4)' },
    { line: 9, msg: 'call f_say → void' },
    { line: 10, msg: 'assign v6 = 4' },
    { line: 11, msg: 'assign v7 = 0.5' }
  ]
}`;

const m14 = `n2 % n7 % n11 % n15 -->> v1
n9 -->> v2
n0 -->> v3
n0 -->> v4
scan v1 v5 scan v1 v6 when f_minus % v6 % v5 when f_plus % v1{v5 % v1{v6 = v2 v5 % v6 -->> v7
f_say % v7{n1
f_say % v7{n2
`;

const m15 = `/home/mike/ntl01.js:324
    throw new Error(\`NTL parse error (line \${t.line}): \${msg}\`);
    ^
Error: NTL parse error (line 6): Expected a number literal or variable
`;

const m16 = `
i've provided it the following code, and its encountering an error
n2 % n7 % n11 % n15 -->> v1
n9 -->> v2
n0 -->> v3
n0 -->> v4
scan v1 v5 scan v1 v6 when f_minus % v6 % v5 when f_plus % v1{v5 % v1{v6 = v2 v5 % v6 -->> v7
f_say % v7{n1
f_say % v7{n2
throw new Error(\`NTL parse error (line \${t.line}): \${msg}\`);
^
Error: NTL parse error (line 6): Expected a number literal or variable
`;

const m17 = `
Thanks for the repro — I see exactly why it failed.

Your line 5 uses \`when\` with a computed condition:
... when f_minus % v6 % v5 when f_plus % v1{v5 % v1{v6 = v2 ...

Per the original spec I implemented, \`when\` only accepted a **literal or variable** as the condition. So when the parser hit \`f_minus\` after \`when\`, it threw “Expected a number literal or variable” (the message you saw as line 6 due to line counting).

I’ve updated the interpreter in the canvas to make debugging/real programs like yours possible:

- \`when\` now accepts a **full condition expression**:
    
    - a literal/variable/index (as before),
        
    - a **function call** (e.g., \`when f_minus % v6 % v5\`), or
        
    - a **comparison** where the left side can itself be a function call (e.g., \`when f_plus % v1{v5 % v1{v6 = v2\`).
        
- Internally, \`when\` evaluates that expression to a number and runs the body if it's \`> 0\`.

With this change, your program parses and should work as intended: it scans pairs \`(v5, v6)\` with \`v6 > v5\` and, when the sum matches \`v2\` (\`n9\`), sets \`v7\` to \`[v5, v6]\`, so the final two \`f_say\` lines print the indices.

If you still want to keep the stricter spec (only var/literal in \`when\`), I can show a spec-compliant rewrite using a temp variable for the condition. But I figured this relaxed \`when\` makes the language much nicer to debug.
`;

const m18 = `
Ahh, that one's on the interpreter's semantics for \`scan\` variables. I was requiring the scan index var to be _undeclared every time the statement executes_, which breaks nested scans because the inner \`scan v1 v6 ...\` gets executed once per outer iteration—after the first pass, \`v6\` already exists.
`;

const m19 = `➜ mike $ node ntl01.js
say: 1
say: 2
`;

export default function NovelTwoSumInGPT5() {
  return (
    <ArticleLayout title="Novel Two-Sum in GPT-5" date="2025-08-14" toc={toc}>
      <Ap>Frontier LLMs are generally quite adept at generating code for languages which exist in their training data. However: can they generate logically and syntactically correct code in languages {"they've"} never seen?</Ap>
      <Ap>To test this, I am going to invent a new programming language syntactically novel from any programming language I know, then ask GPT-5 Thinking via ChatGPT Plus to solve <Aa href="https://leetcode.com/problems/two-sum/description/">the (in)famous Two Sum problem from Leetcode</Aa>. We end this experiment by having ChatGPT build a functional single-file Javascript interpreter for this language.</Ap>
      <Ah1 id="our-toy-language">Our Toy Language</Ah1>
      <Ap>To ensure that the LLM is asked to code in a truly novel language that exists outside of its training data, I will invent a programming language that is to my knowledge syntactically novel. This language will be named NTL-01 (Novel Toy Language Version 1).</Ap>
      <Ap>The final specification for NTL-01, at least within the context of this experiment, is included <Aa href="#final-specification">at the bottom of this document</Aa>. It is written in reasonably non-technical English, rather than a more formal specification language. The specification was iterated on multiple times, oftentimes as the result of GPT-5 informing me that logical features are missing which are necessary or desirable to solve the provided problem, and much of the content in this document is the story of that iteration.</Ap>
      <Ah1 id="evaluating-the-model">Evaluating the Model</Ah1>
      <Ap>The following prompt will be used in all future conversations with GPT-5 Thinking.</Ap>
      <ATextConversation>
        <ATextConversationMessage sender="user">{m1}</ATextConversationMessage>
      </ATextConversation>
      <Ap>Upon sending this message, GPT-5 will generally respond with an extremely verbose and seemingly quite sophisticated summary of the language features. Sometimes, unpredictably, it will even output a formal language specification. The following output was correct, to my eyes, for the version of the language specification at the time.</Ap>
      <ATextConversation>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">{m2}</ATextConversationMessage>
      </ATextConversation>
      <Ap>During an initial round of testing with this specification, GPT-5 identified an error in the specification and communicated its intention to work around the error. This error was corrected in the specification above and during all further testing outlined in this experiment.</Ap>
      <ATextConversation>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">
            Note: Your example shows `f_div % 1 % 2`. Per the literal rule, that should be `f_div % n1 % n2`. {"I'll"} assume **all integer literals** are `n…` (or `nn…`).
        </ATextConversationMessage>
      </ATextConversation>
      <Ap>Each of the following questions will be asked of GPT-5 in a distinct conversation. {"ChatGPT's"} ability to reference previous conversations has been turned off, and all settings in the Customize ChatGPT window have been left on their default values.</Ap>
      <Ah1 id="printing-hello-world">Printing Hello World</Ah1>
      <Ap>As an initial test, I am curious if ChatGPT is capable of recognizing that NTL-01 is not capable of printing strings to the output, because it has no intrinsic concept of strings.</Ap>
      <ATextConversation>
        <ATextConversationMessage sender="user">
          How do I print the words {'"hello world"'} to the output?
        </ATextConversationMessage>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">{m3}</ATextConversationMessage>
      </ATextConversation>
      <Ap>In the emitted code, GPT-5 has incorrectly assumed that the semicolon is the syntax for comments in this language, when in reality NTL-01 has no support for comments. It has also assumed that variables are mutable, which is entirely reasonable.</Ap>
      <Ap>Beyond these issues, however, GPT-5 provides a functionally correct and useful response.</Ap>
      <Ah1 id="two-sum-v1">Two Sum v1</Ah1>
      <Ap>I have modified the Two Sum problem slightly to better fit the way NTL-01 woks. On the first attempt at this problem, the NTL-01 specification had no concept of variable comparison, conditional statements, and looping; ChatGPT worked around this to produce a solution that should, to my eyes, work anyway with some external legwork.</Ap>
      <ATextConversation>
        <ATextConversationMessage sender="user">{m4}</ATextConversationMessage>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">{m5}</ATextConversationMessage>
      </ATextConversation>
      <Ap>There are a few issues to call attention to with its output:</Ap>
      <Ap>First, it believes that -- is a comment operator. Truly correct output would have no comments.</Ap>
      <Ap>Second, its recommendation at the end to allow indexing with a variable uses an incorrect syntax for array indexing <span className="font-mono">{"vA{vI}"}</span> versus <span className="font-mono">{"vA{vI"}</span></Ap>
      <Ap>Third, this recommendation also uses a syntactically invalid form for variable names <span className="font-mono">vA</span> and <span className="font-mono">vI</span> versus for example <span className="font-mono">v0</span> and <span className="font-mono">v1</span>. This may just be its way of providing a generic example variable name, however.</Ap>
      <Ap>{"I'm"} unsure if the logic represented by its output is correct; but it vibes as correct with me. Given the limitations of the language at the time this was ran, this seems like a reasonable output.</Ap>
      <Ap>After this attempt, I have modified the specification to include variable comparison and conditional statement execution.</Ap>
      <Ah1 id="two-sum-v2">Two Sum v2</Ah1>
      <Ap>With the modified specification, I pose the same problem to it. This modified specification lacked any concept of looping, which was added later for v3.</Ap>
      <ATextConversation>
        <ATextConversationMessage sender="user">{m6}</ATextConversationMessage>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">{m7}</ATextConversationMessage>
      </ATextConversation>
      <Ap>Beyond the issue with comments already outlined, this vibes to me as a functionally and syntactically correct solution, within the limitations of the language.</Ap>
      <Ap>Unlike during v1, GPT-5 did not give any direct recommendation to try to extend the language with support for looping, even though it would dramatically simplify the logic and enable support for dynamically sized input arrays. We will now do this, and run it again.</Ap>
      <Ah1 id="two-sum-v3">Two Sum v3</Ah1>
      <Ap>The final attempt at this includes the specification as it is outlined above; with variable comparison, conditional statement execution, and looping.</Ap>
      <ATextConversation>
        <ATextConversationMessage sender="user">{m8}</ATextConversationMessage>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">{m9}</ATextConversationMessage>
      </ATextConversation>
      <Ap>Syntactically, what it has generated seems correct. However, I struggle to reason about the logical validity of that beautiful one-liner that it wrote. It would be nice if we could actually execute this code...</Ap>
      <Ah1 id="building-an-interpreter">Building an Interpreter</Ah1>
      <Ap>At times throughout this experiment, unprompted, GPT-5 offered to write an interpreter for this language. So, lets do it.</Ap>
      <Ap>{"I've"} began this conversation with the same prompt as the previous experimental runs, then followed up with a second message:</Ap>
      <ATextConversation>
        <ATextConversationMessage sender="user">To make debugging code in this language easier, I need an interpreter written in javascript.</ATextConversationMessage>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">{m10}</ATextConversationMessage>
      </ATextConversation>
      <Ap>The commented-out example NTL-01 code GPT-5 generated at the bottom of the emitted interpreter resulted in the following output:</Ap>
      <Acode>{m11}</Acode>
      <Ap>Given line 10 is the last line in the test script, this might just be an issue with how its handling newlines at the end of scripts. {"Let's"} see if it can resolve it by simply copy-pasting this error into the ChatGPT canvas window.</Ap>
      <ATextConversation>
        <ATextConversationMessage sender="user">The example code at the bottom is outputting the following: Error: NTL parse error (line 10): Unexpected tokens after end of statement</ATextConversationMessage>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">{m12}</ATextConversationMessage>
      </ATextConversation>
      <Ap>Trying the same examples again:</Ap>
      <Acode>{m13}</Acode>
      <Ap>I have manually verified that this output is correct.</Ap>
      <Ap>Finally, we will test the v3 Two Sum code against an example set of input data provided by Leetcode. We expect the output to be `1` and `2` (given that NTL-01 is a 1-indexed array language).</Ap>
      <Acode>{m14}</Acode>
      <Ap>This results in the following output:</Ap>
      <Acode>{m15}</Acode>
      <Ap>This feels likely to be an issue with the nested series of loops and conditionals. {"I'll"} return to ChatGPT and see if it can correct the issue on its own.</Ap>
      <ATextConversation>
        <ATextConversationMessage sender="user">{m16}</ATextConversationMessage>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">{m17}</ATextConversationMessage>
      </ATextConversation>
      <Ap>This indicates to me that its possible the output ChatGPT gave during Attempt 3 did not conform with the specification, which I missed during my review of its output. However, if the implementation being the specification is good enough for Typescript, its good enough for us.</Ap>
      <Ap>This solution runs into a further error. {"We'll"} do one more round of automated remediation with ChatGPT.</Ap>
      <ATextConversation>
        <ATextConversationMessage sender="user">Error: NTL runtime error (line 6): Scan index var v6 must be undeclared</ATextConversationMessage>
        <ATextConversationMessage sender="ai" senderLabel="GPT-5 Thinking">{m18}</ATextConversationMessage>
      </ATextConversation>
      <Acode>{m19}</Acode>
      <Ah1 id="conclusions">Conclusions</Ah1>
      <Ap>For the most part, GPT-5 Thinking on ChatGPT can be effective at programming in languages it has never seen before, including the application of uncommon syntax paradigms like that scan one-liner, and building interpreters for new languages.</Ap>
      <Ap>As anyone who has written code with AI can attest: AIs love writing comments, even in programming languages which syntactically do not support comments.</Ap>
      <Ah1 id="followups">Followups</Ah1>
      <Ap>Could an LLM demonstrate similar capabilities with an even less formal definition of the language, such as just example code?</Ap>
      <Ap>What does a programming language entirely designed by LLMs look like?</Ap>
      <Ap>Can AI low-shot an interpreter for an existing, complicated language like Javascript?</Ap>
      <Ap>How do these results differ for other frontier LLMs?</Ap>
      <Ah1 id="final-specification">Final Specification</Ah1>
      <Acode>{finalSpecification}</Acode>
      <Ah1 id="full-interpreter-code">Full Interpreter Code</Ah1>
      <Acode>{fullInterpreter}</Acode>
    </ArticleLayout>
  )
}
