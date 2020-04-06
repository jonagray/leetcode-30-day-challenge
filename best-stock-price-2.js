'use strict';

// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.


/**
 * @param {number[]} prices
 * @return {number}
 */

// Loop through the array to find the most expensive 

let dayPrices = [7,1,5,3,6,4];


var maxProfit = function(arr) {
  let profit = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] < arr[i]) {
        profit += arr[i] - arr[i - 1];
      }
    }
    return profit;
};

maxProfit(dayPrices);