/*
Given the head of a singly linked list, reverse the list, and return the reversed list.



Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []


Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
*/

const reverseList = function(head) {
    if (!head || !head.next) return head;
    let prev = head;
    let next = head.next;
    head.next = null;
    while (next) {
        let temp = next.next;
        next.next = prev;
        prev = next;
        next = temp;
    }
    return prev;
};
