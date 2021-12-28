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
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

}


let ll = new LinkedList();
ll.addFirst(2)
ll.addFirst(3)
ll.addFirst(4)
ll.addFirst(5)
ll.addFirst(6)

// ll.print();
// console.log(ll)


// function reverse(head) {`
//     let prev = null;
//     let next = null;

//     while (head !== null) {
//         console.log("head: ",head.Node.data)
//         next = head.next;
//         head.next = prev;
//         prev = head;
//         head = next;
//     }
//     return prev;
// }

// console.log(reverse(ll))

function reverse1(head) {
    if (head == null || head.next == null){
        return head;
    }
    var rest = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return rest;
}
// ll.print()
console.log(reverse1(ll));