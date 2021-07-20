// Any digit followed by all zeros: 100, 90000
let isDigitZeros = (numStr) => /^[1-9]0{2,}$/.test(numStr);
// Every digit is the same number: 1111
let isSameDigit = (numStr) => /^([0-9])\1+$/.test(numStr);
// The digits are sequential, incementing†: 1234567890
let isSeqInc = (numStr) => {
  for (let i = 0; i < 10 - numStr.length + 1; i++) {
    if ("1234567890".substr(i, numStr.length) === numStr) return true;
  }
  return false;
};
// The digits are sequential, decrementing‡: 43210
let isSeqDec = (numStr) => {
  for (let i = 0; i < 10 - numStr.length + 1; i++) {
    if ("9876543210".substr(i, numStr.length) === numStr) return true;
  }
  return false;
};
// The digits are a palindrome: 1221 or 73837
let isPalindrome = (numStr) => numStr.split("").reverse().join("") === numStr;
// The digits match one of the values in the awesomePhrases array
let isAwesome = (number, awesomePhrases) => awesomePhrases.includes(number);
// TESTING for being almost interesting
let almostInTest = (num, awesomePhrases) =>
  interestingTest(++num, awesomePhrases) ||
  interestingTest(++num, awesomePhrases);

// isInteresting function minus the almostInteresting test part
function interestingTest(number, awesomePhrases) {
  // Priority Test: 3-digit test, this test has to yield true before other tests can continue
  if(number < 100) return false

  let numStr = String(number);
  // isInteresting TESTs
  return [
    isDigitZeros(numStr),
    isSameDigit(numStr),
    isSeqInc(numStr),
    isSeqDec(numStr),
    isPalindrome(numStr),
    isAwesome(number, awesomePhrases),
  ].some((result) => result === true)
}

// 🌝🌝🌝 MAIN
function isInteresting(number, awesomePhrases) {
  // Test if number is INTERESTING; if not, test if number is ALMOST INTERESTING
  return interestingTest(number, awesomePhrases)
    ? 2
    : almostInTest(number, awesomePhrases)
    ? 1
    : 0;
}

console.log(isInteresting(98, []))