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
    addFront(elm){
        this.head = new Node(elm,this.head);
        this.size++;
    }

    addLast(elm){
        let node = new Node(elm)
        if(this.head==null){
            this.head = node
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    printList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

let list = new LinkedList()
list.addFront(8);
list.addLast(7)
list.addFront(9);
list.addLast(10)
list.printList()