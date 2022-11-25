/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2


Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
*/

const majorityElement = function(nums) {
    let set = new Set(nums);
    let arr = [...set];
    for (let i = 0; i < arr.length; i++) {
        if (nums.filter(ele => ele === arr[i]).length > (nums.length / 2)) return arr[i];
    }
};
