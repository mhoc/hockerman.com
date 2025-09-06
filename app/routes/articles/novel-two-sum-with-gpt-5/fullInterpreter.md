```
// NTL‑01 JavaScript Interpreter
// --------------------------------
// Spec recap (abbrev):
// - Numbers: n42, nn12 (negative). Floats only via f_div.
// - Vars: v1, v2, ... must be *declared/assigned* in increasing order.
// - Assign: <expr> -->> vK
// - Comparisons: x = y  |  x n= y  → numeric truth (1 or 0)
// - when <literal|var> <statement>
// - Functions: f_plus, f_minus, f_times, f_div, f_say, f_size
//   Call syntax: f_name % arg1 % arg2 ... (args are literals or vars or array indexes)
// - Arrays: array literal is a %‑separated list (no function name) assigned to a var, e.g. `n1 % v2 % n3 -->> v4`
//   Indexing: vA{n1  (arrays are 1‑indexed). Append: vA + value   (in‑place)
// - scan vArr vK <statement>  (vK is a *new* var id; body is one statement)
//
// Notes:
// * This interpreter enforces var ordering rules, array bounds, and arg arity.
// * f_say collects outputs in `result.outputs` and also calls an optional onSay callback.
// * `trace: true` captures step‑by‑step execution records for debugging.
// * The parser is line‑oriented; the body of `when`/`scan` is parsed from the remainder of the same line.
// * We accept exact spec syntax. Minor typos like missing '%' in examples are NOT accepted to keep grammar crisp.

class NTL01Interpreter {
  constructor(options = {}) {
    this.onSay = options.onSay || null;
    this.traceEnabled = !!options.trace;
    this.reset();
  }

  reset() {
    this.vars = new Map(); // name -> value (number or array of numbers)
    this.highestDeclared = 0; // last declared var id
    this.outputs = [];
    this.trace = [];
  }

  run(source) {
    this.reset();
    const lines = source.split(/\r?\n/);
    lines.forEach((rawLine, i) => {
      const lineNo = i + 1;
      const line = rawLine.trim();
      if (!line) return; // skip empty
      const lexer = new Lexer(line, lineNo);
      const parser = new Parser(lexer);
      const stmt = parser.parseStatement();
      if (!parser.isEOF()) {
        parser.error("Unexpected tokens after end of statement");
      }
      this.execStatement(stmt, lineNo);
    });

    return {
      vars: Object.fromEntries(this.vars.entries()),
      outputs: this.outputs.slice(),
      trace: this.trace.slice(),
    };
  }

  // --- Execution helpers ---
  execStatement(stmt, lineNo) {
    const t = (msg, extra = {}) => {
      if (this.traceEnabled) this.trace.push({ line: lineNo, msg, ...extra });
    };

    switch (stmt.kind) {
      case 'assign': {
        const value = this.evalExpr(stmt.expr, lineNo);
        this.assignVar(stmt.target, value, lineNo);
        t(`assign ${stmt.target} = ${this._fmt(value)}`);
        break;
      }
      case 'call': {
        const value = this.execCall(stmt.call, lineNo);
        t(`call ${stmt.call.name} → ${value !== undefined ? this._fmt(value) : 'void'}`);
        break;
      }
      case 'append': {
        const arr = this.readVar(stmt.left, lineNo);
        if (!Array.isArray(arr)) this.runtimeError(lineNo, `Append target ${stmt.left} is not an array`);
        const v = this.evalValueTerm(stmt.right, lineNo);
        arr.push(v);
        t(`append ${stmt.left} + ${this._fmt(v)} (new length ${arr.length})`);
        break;
      }
      case 'when': {
        const cond = this.evalExpr(stmt.cond, lineNo);
        t(`when cond=${this._fmt(cond)}`);
        if (cond > 0) this.execStatement(stmt.body, lineNo);
        break;
      }
      case 'scan': {
        const arr = this.readVar(stmt.arrayVar, lineNo);
        if (!Array.isArray(arr)) this.runtimeError(lineNo, `${stmt.arrayVar} is not an array`);
        // Declare index var if not already declared (declare-on-first-use),
        // then REUSE it for subsequent evaluations of this same statement.
        const idxName = stmt.indexVar;
        const idxId = this._varId(idxName, lineNo);
        let declaredNow = false;
        if (!this.vars.has(idxName)) {
          if (idxId !== this.highestDeclared + 1) {
            this.runtimeError(lineNo, `Variables must be declared in order: expected v${this.highestDeclared + 1} next, got ${idxName}`);
          }
          this.vars.set(idxName, 0);
          this.highestDeclared = idxId;
          declaredNow = true;
          t(`declare ${idxName} for scan`);
        } else {
          t(`reuse ${idxName} for scan`);
        }
        for (let i = 1; i <= arr.length; i++) {
          this.vars.set(idxName, i);
          t(`scan ${stmt.arrayVar}[${i}] (index var ${idxName}=${i})`);
          this.execStatement(stmt.body, lineNo);
        }
        // We intentionally do NOT un-declare the scan index var to preserve
        // global var ordering semantics across the program.
        break;
      }
      default:
        this.runtimeError(lineNo, `Unknown statement kind ${(stmt && stmt.kind) || '?'} `);
    }
  }

  // Expressions (assignment LHS allows function calls & comparisons; args/ValueTerm disallow nested calls per spec)
  evalExpr(expr, lineNo) {
    switch (expr.kind) {
      case 'valueTerm':
        return this.evalValueTerm(expr.term, lineNo);
      case 'call':
        return this.execCall(expr.call, lineNo);
      case 'compare': {
        const evalSide = (side) => {
          if (!side) return 0;
          if (side.kind === 'call') return this.execCall(side.call, lineNo);
          if (side.kind === 'valueTerm') return this.evalValueTerm(side.term, lineNo);
          // Back-compat: if side looks like a ValueTerm node
          if (side.type) return this.evalValueTerm(side, lineNo);
          this.runtimeError(lineNo, 'Invalid comparison operand');
        };
        const a = evalSide(expr.left);
        const b = evalSide(expr.right);
        let out = 0;
        if (expr.op === '=') out = (a === b) ? 1 : 0;
        else if (expr.op === 'n=') out = (a !== b) ? 1 : 0;
        else this.runtimeError(lineNo, `Invalid comparison operator ${expr.op}`);
        return out;
      }
      case 'arrayLiteral': {
        // Array literal only appears on LHS of assignment and immediately materializes
        return expr.items.map(it => this.evalValueTerm(it, lineNo));
      }
      default:
        this.runtimeError(lineNo, `Unknown expr kind ${(expr && expr.kind) || '?'}`);
    }
  }

  evalValueTerm(term, lineNo) {
    switch (term.type) {
      case 'literal':
        return term.value;
      case 'var':
        return this.readVar(term.name, lineNo);
      case 'index': {
        const base = this.readVar(term.base, lineNo);
        if (!Array.isArray(base)) this.runtimeError(lineNo, `${term.base} is not an array`);
        const idx = this.evalValueTerm(term.index, lineNo);
        if (!Number.isInteger(idx)) this.runtimeError(lineNo, `Array index must be an integer, got ${idx}`);
        if (idx < 1 || idx > base.length) this.runtimeError(lineNo, `Array index ${idx} out of bounds (length ${base.length})`);
        return base[idx - 1]; // 1‑indexed
      }
      default:
        this.runtimeError(lineNo, `Invalid value term`);
    }
  }

  execCall(call, lineNo) {
    const args = call.args.map(a => this.evalValueTerm(a, lineNo));
    switch (call.name) {
      case 'f_plus':
        this._arity(call, 2, lineNo);
        return args[0] + args[1];
      case 'f_minus':
        this._arity(call, 2, lineNo);
        return args[0] - args[1];
      case 'f_times':
        this._arity(call, 2, lineNo);
        return args[0] * args[1];
      case 'f_div':
        this._arity(call, 2, lineNo);
        if (args[1] === 0) this.runtimeError(lineNo, `Division by zero`);
        return args[0] / args[1];
      case 'f_say':
        this._arity(call, 1, lineNo);
        this.outputs.push(args[0]);
        if (typeof this.onSay === 'function') this.onSay(args[0]);
        return undefined;
      case 'f_size':
        this._arity(call, 1, lineNo);
        if (!Array.isArray(this.readVarNameOnly(call.args[0], lineNo))) {
          this.runtimeError(lineNo, `f_size expects an array variable`);
        }
        return args[0].length; // 1‑indexed length value is same numeric
      default:
        this.runtimeError(lineNo, `Unknown function ${call.name}`);
    }
  }

  readVar(name, lineNo) {
    if (!this.vars.has(name)) this.runtimeError(lineNo, `Variable ${name} is not defined`);
    return this.vars.get(name);
  }

  readVarNameOnly(argTerm, lineNo) {
    // Helper to check the term corresponds to a var holding an array (for f_size message accuracy)
    if (argTerm.type !== 'var') this.runtimeError(lineNo, `Expected a variable reference`);
    if (!this.vars.has(argTerm.name)) this.runtimeError(lineNo, `Variable ${argTerm.name} is not defined`);
    return this.vars.get(argTerm.name);
  }

  assignVar(targetName, value, lineNo) {
    const id = this._varId(targetName, lineNo);
    if (!this.vars.has(targetName)) {
      // New declaration: must be next id
      if (id !== this.highestDeclared + 1) {
        this.runtimeError(lineNo, `Variables must be declared in order: expected v${this.highestDeclared + 1} next, got ${targetName}`);
      }
      this.highestDeclared = id;
    }
    this.vars.set(targetName, value);
  }

  _varId(name, lineNo) {
    const m = /^v(\d+)$/.exec(name);
    if (!m) this.runtimeError(lineNo, `Invalid variable name ${name}`);
    return parseInt(m[1], 10);
  }

  _arity(call, n, lineNo) {
    if (call.args.length !== n) this.runtimeError(lineNo, `${call.name} expects ${n} args, got ${call.args.length}`);
  }

  _fmt(v) {
    if (Array.isArray(v)) return `[${v.join(', ')}]`;
    return String(v);
  }

  runtimeError(lineNo, msg) {
    throw new Error(`NTL runtime error (line ${lineNo}): ${msg}`);
  }
}

// ----- Lexer -----
class Lexer {
  constructor(input, lineNo) {
    this.input = input;
    this.lineNo = lineNo;
    this.pos = 0;
    this.tokens = [];
    this.tokenize();
    this.idx = 0;
  }

  tokenize() {
    const s = this.input;
    const push = (type, value = null) => this.tokens.push({ type, value, line: this.lineNo });

    while (this.pos < s.length) {
      // Skip whitespace
      if (/\s/.test(s[this.pos])) { this.pos++; continue; }

      // Multi‑char operators
      if (s.startsWith('-->>', this.pos)) { push('ARROW'); this.pos += 4; continue; }
      if (s.startsWith('n=', this.pos)) { push('NEQ'); this.pos += 2; continue; }

      const ch = s[this.pos];

      // Single‑char tokens
      if (ch === '%') { push('PERCENT'); this.pos++; continue; }
      if (ch === '{') { push('LBRACE'); this.pos++; continue; }
      if (ch === '+') { push('PLUS'); this.pos++; continue; }
      if (ch === '=') { push('EQ'); this.pos++; continue; }

      // Keywords
      if (s.startsWith('when', this.pos) && this._wordBoundary(this.pos + 4)) {
        push('WHEN'); this.pos += 4; continue;
      }
      if (s.startsWith('scan', this.pos) && this._wordBoundary(this.pos + 4)) {
        push('SCAN'); this.pos += 4; continue;
      }

      // Function name: f_[a-zA-Z]...
      if (s[this.pos] === 'f') {
        const m = /^f_[a-zA-Z]+/.exec(s.slice(this.pos));
        if (m) { push('FN', m[0]); this.pos += m[0].length; continue; }
      }

      // Variable: v\d+
      if (s[this.pos] === 'v') {
        const m = /^v\d+/.exec(s.slice(this.pos));
        if (m) { push('VAR', m[0]); this.pos += m[0].length; continue; }
      }

      // Number literal: n\d+ or nn\d+
      if (s[this.pos] === 'n') {
        const m = /^(nn\d+|n\d+)/.exec(s.slice(this.pos));
        if (m) { push('NUM', m[0]); this.pos += m[0].length; continue; }
      }

      throw new Error(`NTL lex error (line ${this.lineNo}): Unexpected token starting at "${s.slice(this.pos)}"`);
    }
    this.tokens.push({ type: 'EOF', value: null, line: this.lineNo });
  }

  _wordBoundary(pos) {
    const c = this.input[pos];
    return pos >= this.input.length || /[^a-zA-Z0-9_]/.test(c);
  }

  peek() { return this.tokens[this.idx]; }
  next() { return this.tokens[this.idx++]; }

  expect(type) {
    const tok = this.next();
    if (tok.type !== type) throw new Error(`NTL parse error (line ${tok.line}): Expected ${type}, got ${tok.type}`);
    return tok;
  }
}

// ----- Parser -----
class Parser {
  constructor(lexer) {
    this.lexer = lexer;
  }

  isEOF() { return this.lexer.peek().type === 'EOF'; }

  error(msg) {
    const t = this.lexer.peek();
    throw new Error(`NTL parse error (line ${t.line}): ${msg}`);
  }

  // statement := assign | call | append | when | scan
  parseStatement() {
    const look = this.lexer.peek();
    if (look.type === 'WHEN') return this.parseWhen();
    if (look.type === 'SCAN') return this.parseScan();

    // Try append first: VAR PLUS ValueTerm (no ARROW)
    if (look.type === 'VAR') {
      const snapshot = this._snapshot();
      const varTok = this.lexer.next();
      if (this.lexer.peek().type === 'PLUS') {
        this.lexer.next(); // consume PLUS
        const rightTerm = this.parseValueTerm();
        this._ensureEOF();
        return { kind: 'append', left: varTok.value, right: rightTerm };
      }
      // not append; rollback
      this._restore(snapshot);
    }

    // Parse an assignable expression (call, compare, arrayLiteral, valueTerm)
    const expr = this.parseAssignableExpr();

    // Assignment?
    if (this.lexer.peek().type === 'ARROW') {
      this.lexer.next();
      const vTok = this.lexer.expect('VAR');
      this._ensureEOF();
      return { kind: 'assign', expr, target: vTok.value };
    }

    // Otherwise, allow a bare call as a statement (e.g., f_say ...)
    if (expr.kind === 'call') {
      this._ensureEOF();
      return { kind: 'call', call: expr.call };
    }

    this.error('Expected assignment or function call');
  }

  parseWhen() {
    this.lexer.expect('WHEN');
    const cond = this.parseWhenCondExpr(); // allow call/compare/valueTerm
    const body = this.parseStatement();
    return { kind: 'when', cond, body };
  }

  // Allow richer conditions for `when`: call, comparison, or simple value/var/index
  parseWhenCondExpr() {
    const look = this.lexer.peek();
    if (look.type === 'FN') {
      const call = this.parseCall();
      const next = this.lexer.peek();
      if (next.type === 'EQ' || next.type === 'NEQ') {
        const op = (this.lexer.next().type === 'EQ') ? '=' : 'n=';
        const right = this.parseValueTerm();
        return { kind: 'compare', op, left: { kind: 'call', call }, right: { kind: 'valueTerm', term: right } };
      }
      return { kind: 'call', call };
    }
    // valueTerm [ ( '=' | 'n=' ) valueTerm ]
    const left = this.parseValueTerm();
    const next = this.lexer.peek();
    if (next.type === 'EQ' || next.type === 'NEQ') {
      const op = (this.lexer.next().type === 'EQ') ? '=' : 'n=';
      const right = this.parseValueTerm();
      return { kind: 'compare', op, left: { kind: 'valueTerm', term: left }, right: { kind: 'valueTerm', term: right } };
    }
    return { kind: 'valueTerm', term: left };
  }

  parseScan() {
    this.lexer.expect('SCAN');
    const arrVar = this.lexer.expect('VAR').value;
    const idxVar = this.lexer.expect('VAR').value;
    const body = this.parseStatement();
    return { kind: 'scan', arrayVar: arrVar, indexVar: idxVar, body };
  }

  // assignable-expr := call | compare | arrayLiteral | valueTerm
  parseAssignableExpr() {
    const look = this.lexer.peek();
    if (look.type === 'FN') return { kind: 'call', call: this.parseCall() };

    // Try array literal: ValueTerm (% ValueTerm)+  and must NOT start with FN
    const snapshot = this._snapshot();
    try {
      const first = this.parseValueTerm();
      const items = [first];
      let sawPercent = false;
      while (this.lexer.peek().type === 'PERCENT') {
        this.lexer.next(); // consume %
        items.push(this.parseValueTerm());
        sawPercent = true;
      }
      if (sawPercent) return { kind: 'arrayLiteral', items };
      // No percent -> could be compare or just valueTerm
      // Try compare
      const nextTok = this.lexer.peek();
      if (nextTok.type === 'EQ' || nextTok.type === 'NEQ') {
        const op = (this.lexer.next().type === 'EQ') ? '=' : 'n=';
        const right = this.parseValueTerm();
        return { kind: 'compare', op, left: first, right };
      }
      // Just a value term
      return { kind: 'valueTerm', term: first };
    } catch (e) {
      // rollback and rethrow
      this._restore(snapshot);
      throw e;
    }
  }

  parseCall() {
    const fnTok = this.lexer.expect('FN');
    const args = [];
    if (this.lexer.peek().type === 'PERCENT') {
      // standard: f_x % arg1 % arg2 ...
      while (this.lexer.peek().type === 'PERCENT') {
        this.lexer.next(); // consume %
        args.push(this.parseValueTerm());
      }
    }
    return { name: fnTok.value, args };
  }

  // ValueTerm := literal | var [ '{' ValueTerm ]
  parseValueTerm() {
    const tok = this.lexer.peek();
    if (tok.type === 'NUM') {
      this.lexer.next();
      return { type: 'literal', value: this._numLiteral(tok.value) };
    }
    if (tok.type === 'VAR') {
      const v = this.lexer.next().value;
      if (this.lexer.peek().type === 'LBRACE') {
        this.lexer.next();
        const idx = this.parseValueTerm();
        return { type: 'index', base: v, index: idx };
      }
      return { type: 'var', name: v };
    }
    this.error('Expected a number literal or variable');
  }

  _numLiteral(txt) {
    // txt is like n42 or nn12
    if (txt.startsWith('nn')) return -parseInt(txt.slice(2), 10);
    return parseInt(txt.slice(1), 10);
  }

  _snapshot() { return { idx: this.lexer.idx }; }
  _restore(s) { this.lexer.idx = s.idx; }
  _ensureEOF() { if (!this.isEOF()) this.error('Unexpected extra tokens'); }
}

// ----- Minimal export (Node & browser) -----
if (typeof module !== 'undefined') {
  module.exports = { NTL01Interpreter };
}

// ----- Example usage (uncomment to try in Node) -----
const src = `
n2 % n7 % n11 % n15 -->> v1
n9 -->> v2
n0 -->> v3
n0 -->> v4
scan v1 v5 scan v1 v6 when f_minus % v6 % v5 when f_plus % v1{v5 % v1{v6 = v2 v5 % v6 -->> v7
f_say % v7{n1
f_say % v7{n2
`;
const itp = new NTL01Interpreter({ trace: true, onSay: x => console.log('say:', x) });
const res = itp.run(src);
console.log(res);
```
