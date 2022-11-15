/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

const isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    const obj = {
        '(':')',
        '{':'}',
        '[':']'
    };
    let string = s.split('');
    while (string.length) {
        let len = string.length;
        for (let i = 0; i < string.length; i++) {
            if (!obj[string[i]]) {
                if (obj[string[i-1]] !== string[i]) return false;
                else {
                    string.splice(i-1, 2);
                    break;
                }
            }
        }
        if (len === string.length) return false;
    }
    return true;
};
