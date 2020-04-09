'use strict';

// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:

// Can you solve it in O(N) time and O(1) space?

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

// Just loop through the function normally, and whenever you come to a #, delete the previous character, delete the current character, and then restart the loop. 

let s = "xywrrmp";
let t = "xywrrmu#p";

const backspaceCompare = (s, t) => {
  s = s.split('')
  t = t.split('');
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#' && i > 0) {
      s.splice([i - 1], 2)
      i = 0;
    }
    if (s[i] === '#') {
      s.splice(i, 1)
      i--;
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (t[j] === '#' && j > 0) {
      t.splice([j - 1], 2)
      j = 0;
    }
    if (t[j] === '#') {
      t.splice(j, 1)
      j--;
    }
  }
  s = s.join('');
  t = t.join('');
  if (s === t) {
    return true
  } else {
    return false;
  }
}

backspaceCompare(s, t);