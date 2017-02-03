/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

function findLongestWord(string) {
  var str = string.split(" ");
      var longest = 0;
      var word = null;
      for (var i = 0; i < str.length - 1; i++) {
          if (longest < str[i].length) {
              longest = str[i].length;
              word = str[i];
          }
      }
      return word;
  }


console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')
