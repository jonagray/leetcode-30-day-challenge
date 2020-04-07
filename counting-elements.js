'use strict';

// Given an integer array arr, count element x such that x + 1 is also in arr.

// If there are duplicates in arr, count them seperately.

// Example 1:

// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
// Example 2:

// Input: arr = [1,1,3,3,5,5,7,7]
// Output: 0
// Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
// Example 3:

// Input: arr = [1,3,2,3,5,0]
// Output: 3
// Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
// Example 4:

// Input: arr = [1,1,2,2]
// Output: 2
// Explanation: Two 1s are counted cause 2 is in arr.

/**
 * @param {number[]} arr
 * @return {number}
 */

let input = [1,2,3];

let counter = 0;

var countElements = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + 1 === arr[j]) {
        counter++;
        break;
      }
    }
  }
  return counter;
};

countElements(input);

// Problem can also be done via a hashmap:

// const countElements = function(arr) {
//   let hashmap = new Map()
//   for (let i = 0; i < arr.length; i++) {
//     hashmap.set(arr[i], 1);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (hashmap.has(arr[i] + 1)) {
//       counter++;
//     }
//   }
//   return counter;
// }