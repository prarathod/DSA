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


    
};
const li = new LinkedList();
li.addFirst(9)
li.addFirst(8)
li.addFirst(7)
li.addFirst(5)




console.log(li.deleteAlt(li))
console.log(li)