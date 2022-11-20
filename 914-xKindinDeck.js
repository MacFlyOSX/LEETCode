/*
You are given an integer array deck where deck[i] represents the number written on the ith card.

Partition the cards into one or more groups such that:

Each group has exactly x cards where x > 1, and
All the cards in one group have the same integer written on them.
Return true if such partition is possible, or false otherwise.

Example 1:

Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

Example 2:

Input: deck = [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.


Constraints:

1 <= deck.length <= 104
0 <= deck[i] < 104
*/

const hasGroupsSizeX = function(deck) {
    let obj = {};
    for (let i = 0; i < deck.length; i++) {
        if (obj[`${deck[i]}`]) {
            obj[`${deck[i]}`] += 1;
        } else {
            obj[`${deck[i]}`] = 1;
        }
    }
    let vals = Object.values(obj);
    vals = vals.sort();
    let gcd = 1;
    let i = 2;
    while(i <= vals[0]) {
        let count = 0;
        vals.forEach(ele => ele % i === 0 ? count++ : null);
        if (count === vals.length) gcd = i;
        i++;
    }
    return gcd > 1;
};


console.log(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]));
