'use strict';

// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.


/**
 * @param {string[]} strs
 * @return {string[][]}
 */

let input = ["eat", "tea", "tan", "ate", "nat", "bat"];

let alphabetize = function(word) {
  word = word.split('');
  word = word.sort();
  word = word.join('');
  return word;
}
var groupAnagrams = function(strs) {
  let anagrams = {};
  strs.forEach((str) => {
    const sortedStr = alphabetize(str);
    if (anagrams[sortedStr]) {
      return anagrams[sortedStr].push(str);
    }
    anagrams[sortedStr] = [str];
  });
  return Object.values(anagrams);
};

groupAnagrams(input);