/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


Constraints:

-231 <= x <= 231 - 1

*/

const isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !==0)) return false;
    let xStr = x.toString();
    let startArr = [];
    let endArr = [];
    let len = Math.floor(xStr.length/2);
    const arr = xStr.split('');
    if (xStr.length % 2 === 0) {
        startArr = arr.slice(0, len);
        endArr = arr.slice(len);
    } else {
        startArr = arr.slice(0, len);
        endArr = arr.slice(len + 1);
    }
    return startArr.join('') === endArr.reverse().join('');
};
