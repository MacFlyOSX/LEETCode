/*
Given the root of a binary tree, return the postorder traversal of its nodes' values.

Example 1:


Input: root = [1,null,2,3]
Output: [3,2,1]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]


Constraints:

The number of the nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

var postorderTraversal = function(root) {
    let arr = [];
    if (!root) return arr;
    if (root.left) arr.push(...postorderTraversal(root.left));
    if (root.right) arr.push(...postorderTraversal(root.right));
    return [...arr, root.val];
};
