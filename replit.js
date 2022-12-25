/*
You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

Example 1:
Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.

Example 2:
Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation:
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"

Example 3:
Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"

Constraints:
1 <= s.length <= 105
2 <= k <= 104
s only contains lowercase English letters.
*/

s = "deeedbbcccbdaa", k = 3
stack = [[d, 1]]

/*
 * @param {string} s
 * @param {number} k
 * @return {string}
*/
var removeDuplicates = function(s, k) {
  let stack = [[s[0], 1]];
  let i = 1;
  while (i < s.length) {
    let len = stack.length - 1;
    if (stack[len][0] === s[i]) {
      stack[len][1] += 1;
    } else stack.push([s[i], 1]);
    if (stack[len][1] === k) stack.pop();
    i++;
  }
  let str = '';
  stack.forEach(ele => str += ele[0].repeat(ele[1]));
  return str;
};

// instantiate a stack
// iterate through the string and push onto the stack
// each iteration we'll check to see if the last three indices are the same character
// if they are, we'll pop k times, then proceed
// return
