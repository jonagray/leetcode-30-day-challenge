'use strict';

// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 

// (Each 2 listed below is supposed to indicate that the number to it's left is being squared - so 12 is really 1 squared)
// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */

let n = [23];
let result;

// Counter will act as an independent variable to limit the amount of time the function runs - if the result never reaches 1, it will exit after trying a set amount of times, avoiding an endless loop
let isHappy = function(n, counter = 0) {
  result = false;
  if (counter < 10) {
    // Turn the number into a string, split it into individual characters, then create a new array with each character converted back into a number, and squared
    let arr = n.toString().split('').map(n => n * n);
    // Add the numbers in the array together
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // If the sum is equal to 1, it is a happy number, and the result is returned as true - if it is not, the counter increments by 1, and the function will run again, with the sum now replacing the original input
    if (sum === 1) {
      return result = true;
    } else {
      counter++;
      isHappy(sum, counter);
    }
  }
  return result;
}

isHappy(n)