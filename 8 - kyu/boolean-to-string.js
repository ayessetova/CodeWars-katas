/* 
  Title:
    Convert boolean values to strings 'Yes' or 'No'.

  Description:
    Complete the bool_to_word (PHP: boolToWord ) method.
    Given a boolean value return a 'Yes' string for true and a 'No' string for false

  Link:
    https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no
*/

// Long Solution
// function boolToWord(bool) {
//   if (bool) return 'Yes'
//   return 'No'
// }

// Short Solution
const boolToWord = bool => (bool ? 'Yes' : 'No')

// Test to pass
console.log(boolToWord(true))
// => It should return 'Yes'
console.log(boolToWord(false))
// => It should return 'No'
