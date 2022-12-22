/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1


Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
*/

var firstUniqChar = function(s) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = obj[s[i]] ? [...obj[s[i]], i] : [i];
    }
    let arr = Object.values(obj).filter(ele => ele.length === 1).sort((a,b) => a[0] - b[0]);
    return arr.length ? arr[0][0] : -1;
};
