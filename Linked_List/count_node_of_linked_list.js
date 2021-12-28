/*
Given a singly linked list. The task is to find the length of the linked list, where length is defined as the number of nodes in the linked list.

Example 1:

Input:
LinkedList: 1->2->3->4->5
Output: 5
Explanation: Count of nodes in the 
linked list is 5, which is its length.
Example 2:

Input:
LinkedList: 2->4->6->7->5->1->0
Output: 7
Explanation: Count of nodes in the
linked list is 7. Hence, the output
is 7.
Your Task:
Your task is to complete the given function getCount(), which takes a head reference as an argument and should return the length of the linked list.

Expected Time Complexity : O(N)
Expected Auxilliary Space : O(1)

Constraints:
1 <= N <= 105
1 <= value <= 103
*/

class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    addFront(data){
        this.head = new Node(data , this.head)
        this.size++;
    }
    getCount(){
        let current = this.head;
        let count = 0;
        while(current){
            count++;
            current = current.next;
        }
        console.log(count);
    }
}

const li = new LinkedList();
li.addFront(5)
li.addFront(8)

console.log(li)
li.getCount();