/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4


Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

const searchInsert = (nums, target) => {
    if (nums.length === 1) {
        if (nums[0] < target) return 1;
        else return 0;
    }
    let mid = Math.floor(nums.length / 2);
    if (target < nums[mid]) return searchInsert(nums.slice(0, mid), target);
    else if (target === nums[mid]) return mid;
    else return mid + searchInsert(nums.slice(mid), target);
};
