// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //return str.split('').reverse().join(''); #1
  /*let reversed = '';
  for (character of str) {
    reversed = character + reversed;
  }
  return reversed; #2 */
  debugger
  return str.split('').reduce((rev, char) => char + rev, ''); // #3
}

module.exports = reverse;
