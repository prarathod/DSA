class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // methods;
    add(element){
        var node = new Node(element);
        // if linked list is empty 
        if(!this.head){
            this.head = node;
        }else{
            var current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

}

var list = new LinkedList();
list.add(2)
list.add(3)
list.add(5)
list.add(4)
console.log(list)