class Node {
    constructor(elm,next=null){
        this.data = elm;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(data){
        this.head = new Node(data,this.head);
        this.size++;
    }
}

const ll = new LinkedList();
ll.add(5)
ll.add(7)
ll.add(9)
console.log(ll)
