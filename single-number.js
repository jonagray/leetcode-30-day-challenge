'use strict';

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Example 1:
  // Input: [2,2,1]
  // Output: 1
// Example 2:
  // Input: [4,1,2,1,2]
  // Output: 4

let nums = [2,2,4,5,4,7,8,7,8]

let findSingleNumber = function(arr) {
  arr.sort();
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }
}

findSingleNumber(nums)