export type TokenKind =
  | 'let'
  | 'function'
  | 'true'
  | 'false'
  | 'if'
  | 'else'
  | 'return'
  | 'assign'
  | 'plus'
  | 'minus'
  | 'bang'
  | 'asterisk'
  | 'slash'
  | 'lessThan'
  | 'greaterThan'
  | 'equal'
  | 'notEqual'
  | 'comma'
  | 'semicolon'
  | 'leftParen'
  | 'rightParen'
  | 'leftBrace'
  | 'rightBrace'
  | 'identifier'
  | 'integer'
  | 'illegal'
  | 'eof'

export interface Token {
  kind: TokenKind
  text: string
}
