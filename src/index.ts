/**
 * Spidertracks Limited
 * All rights reserved.
 */
const exercise = require("./exercise");

const palindromesToCheck = [
    'pop',
    'step on no pets',
    'rotor',
    'noon',
    'A man, a plan, a canal, Panama!'
]

const nonPalindromesToCheck = [
    'hello',
    'world',
    'spidertracks',
    'This is not a palindrome'
]

function main() {
  console.log('Checking palindromes')
  exercise(palindromesToCheck);

  console.log('Checking non-palindromes')
  exercise(nonPalindromesToCheck);
}

main();