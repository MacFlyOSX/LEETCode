/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step


Constraints:

1 <= n <= 45
*/

const climbStairs = function(n) {
    function climb(num) {
        if (num === 1) return ['1'];
        const arr = climb(num - 1);
        let final = [...arr.map(ele => `${ele}1`), ...arr.map(ele => `1${ele}`)];
        final = num % 2 === 0 ? [...final, '2'.repeat(num/2)] : final;
        return final;
    }
    let set = new Set(climb(n));
    console.log([...set]);
    return set.size;
};

console.log(climbStairs(5));
