function BracketStack() {
  let openBracketsCount = 0;
  this.isEmpty = function () {
    return openBracketsCount === 0;
  };
  this.push = function () {
    openBracketsCount++;
  };
  /**
   * @throws If stack is empty
   */
  this.pop = function () {
    if (this.isEmpty()) throw new Error('Cannot pop empty stack');
    openBracketsCount--;
  };
}
/**
 * @param {string} symbol
 * @returns A function that checks if a given value is the symbol
 */
function isSymbol(symbol) {
  /**
   * @param {string} value
   * @returns {boolean}
   */
  function check(value) {
    return symbol === value;
  }
  return check;
}
/** * Checks if a pair of brackets match
 * @param {string} inputString
 * @param {string} openingSymbol
 * @param {string} closingSymbol
 */
function doBracketsMatch(inputString, openingSymbol, closingSymbol) {
  let stack = new BracketStack();
  let isOpeningSymbol = isSymbol(openingSymbol);
  let isClosingSymbol = isSymbol(closingSymbol);
  for (let i = 0; i < inputString.length; i++) {
    let value = inputString[i];
    if (isOpeningSymbol(value)) stack.push();
    if (isClosingSymbol(value))
      if (stack.isEmpty()) return false;
      else stack.pop();
  }
  return stack.isEmpty();
}

console.log(
  'TRUE? ',
  doBracketsMatch(
    'q(((((((((((((((((((((((((((((((((((((((((((((((((((ee)))))))))))))))))))))))))))))))))))))))))))))))))))2',
    '(',
    ')'
  )
);
console.log('F? ', doBracketsMatch('q((e)2', '(', ')'));
console.log('T? ', doBracketsMatch('(()ooo(kkk))', '(', ')'));
console.log('F? ', doBracketsMatch('((ooo(kkk))', '(', ')'));
console.log('T? ', doBracketsMatch('((ooo(kkk)))(())', '(', ')'));
console.log('F? ', doBracketsMatch('((ooo(kkk)))(()))', '(', ')'));
