class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    addFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    print() {
        let current = this.head;
        let output = ""
        while (current) {
            output+=current.data;
            current = current.next;
        }
        console.log(output)
    }
    addLast() {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.data = Number(current.data + 1);

    }

}


let ll = new LinkedList();
ll.addFirst(2)
ll.addFirst(3)
ll.addFirst(4)
ll.addFirst(5)
ll.addFirst(6)
ll.addLast();
// console.log(ll)
ll.print();
// console.log(ll)


// function reverse(head) {
//     let prev = null;
//     let next = null;

//     while (head !== null) {
//         // console.log("head: ",head.data)
//         next = this,head.next;
//         head.next = prev;
//         prev = head;
//         head = next;
//     }
//     return prev;
// }


// function reverse1(head) {
//     if (head == null || head.next == null){
//         return head;
//     }
//     let rev = reverse(head.next);
//     head.next.next = head;
//     head.next = null;
//     return rev;
// }
// ll.print()
// console.log(reverse1(ll));