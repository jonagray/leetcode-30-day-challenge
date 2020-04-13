'use strict';

// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:

// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// Example 2:

// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Note: The length of the given binary array will not exceed 50,000

// So, if you think of the array, you need to find the longest streak of numbers that have an equal amount of 0s and 1s. So if you have 01010101001 001 , it would stop where the space is, because everything is equal until it does two zeroes in a row - if it does that, it's now unequal, and the streak is ended.

// I have no idea how to do this.

/**
 * @param {number[]} nums
 * @return {number}
 */

let input = [0,1,0,0,0,0,1,0,1,1,1,0];

let longestNumber = 0;
let counter = 0;
let hashmap = new Map();

let findMaxLength = function(nums) {
  // Loop through the array
  for (let i = 0; i < nums.length; i++) {
    // If the number is a 0, decrement the counter, otherwise increment the counter
    if (nums[i] === 0) {
      counter -= 1
    } else {
      counter += 1
    }
    // If the counter is 0, meaning there is an equal amount of 1s and 0s, the longest number gets set to the array index, plus one
    if (counter === 0) {
      longestNumber = i + 1;
    }
    // If the hashmap has counter in it, the longest number gets set to the largest number compared between what we have currently as longest number, and the index of the array minus what the hashmap has for counter.
      // Else, the hashmap sets counter with the array index of i.
    if (hashmap.has(counter)) {
      longestNumber = Math.max(longestNumber, i - hashmap.get(counter))
    } else {
      hashmap.set(counter, i)
    }
  }
  // Return the longest number we've come up with.
  return longestNumber;
};

findMaxLength(input);