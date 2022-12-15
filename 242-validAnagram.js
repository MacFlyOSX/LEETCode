/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

const isAnagram = function(s, t) {
    const first = s.split('').sort().join('');
    const second = t.split('').sort().join('');
    return first === second;
};


let arr = new Array(3).fill(new Array(5).fill(1));
console.log(arr);