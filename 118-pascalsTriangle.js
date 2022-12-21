/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:




Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]


Constraints:

1 <= numRows <= 30
*/

const generate = function(numRows) {
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];
    const arr = generate(numRows - 1);
    const last = arr[arr.length - 1];
    let final = [last[0]];
    for (let i = 0; i < arr.length - 1; i++) {
        final.push(last[i] + last[i + 1]);
    }
    final.push(last[last.length - 1]);
    arr.push(final);
    return arr;
};
