'use strict';

// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

 

// Example 1:

// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
 

// Note:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

/**
 * @param {number[]} stones
 * @return {number}
 */

let input = [2,7,4,1,8,1];

const lastStoneWeight = stones => {
  // If there's only one stone in the pile, return that stone
  if (stones.length < 2) return stones[0]
  // Loop through the entire pile of stones
  for (let i = 0; i < stones.length; i++) {
    // Sort the stones, largest to smallest
    stones.sort((a, b) => b - a)
    // If the first and second position stones are not equal (meaning that the first stone is heavier than the second stone), and there's more than two stones in the pile, splice the array - replace stones 0 and 1, and replace them with the weight of the first stone minus the weight of the second stone. Then, decrement the loop so it runs again from the beginning.
    if (stones[0] !== stones[1] && stones.length > 1) {
      stones.splice(0, 2, stones[0] - stones[1])
      i--;
    }
    // If the first two stones are equal in weight, remove both of them from the array, and start the loop over from the beginning. 
    else if (stones[0] === stones[1]) {
      stones.splice(0, 2)
      i--;
    }
  }
  // If all the stones have been destroyed, return 0, otherwise return the first stone in the array.
  if (!stones.length) return 0;
  else return stones[0];
};

lastStoneWeight(input);