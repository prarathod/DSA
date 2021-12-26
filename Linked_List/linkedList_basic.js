class Node{
    constructor(data, next=null){
        this.data= data;
        this.next = next;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.size=0;
    }

    addFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }
    addLast(data){
        let node = new Node(data)
       
        if(!this.head){
            this.head = node;
        }else{
           let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

    insertAt(data,index){
        if(index>0 && index > this.size){
            return;
        }
        if(index===0){
           this.head = new Node(data,this.head)
            return;
        }
        const node = new Node(data);
        let current , previous;
        current = this.head;
        let count = 0;
        while(count<index){
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }

    getAt(index){
        let current = this.head;
        let count = 0;
        while(current){
            if(count==index){
                console.log(current.data);
            }
            count++;
            current=current.next;
        }
    }
    remove(index){
        if(index>0 && index> this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        if(index === 0){
            this.head = current.next;
        }else{
            while(count<index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
       this.size--;
    }
}
const list = new LinkedList();
list.addFirst(6)
list.addFirst(5)
list.addLast(7)
list.insertAt(2,0)
// list.remove(0)
// list.getAt()
list.print();

// console.log(list)