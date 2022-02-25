// class Node{
//     constructor(data,next=null){
//         this.data = data;
//         this.next = next;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

// // Add node;
//     /*
//         Insert first node;
//         Insert last node;
//         Insert at index;
//     */ 
//     insertFirst(data){
//         this.head = new Node(data,this.head);
//         this.size++;
//     }

//     insertLast(data){
//         let node = new Node(data);
//         let current;
//         if(this.head==null){
//             this.head = node;
//         }else{
//             current = this.head;
//             while(current.next){
//                 current = current.next;
//             }
//             current.next = node;
            
//         }
//         this.size++;
//     }

//     insertAt(data,index){
//         // 1. if index is ourt of range
//         if(index>0 && index>this.size){
//             return;
//         }

//         //2. if index is first index;
//         if(index===0){
//             this.insertFirst(data);
//             return;
//         }

//         const node = new Node(data);
//         let current,previous;
//         let count =0;

//        //set current to first 
//        while(coun<index){
//            previous ==current; //node before index
//            count++;
//            current = current.next;
//        }
//        node.next = current;
//        previous.next = node;
//        this.size++;
//     }


// // Get at index;
//     getAtIndex(index){
//         if(index>=this.size){
//             console.log("your index is",index,"and size is",this.size)
//             return;
//         }
//         let count =0;
//         let current = this.head;
//         while(count<index){
//             current = current.next;
//             count++;
//         };
//         console.log(current.data);
//     }

// //  Remove at index;
// //  clear list;



class Node {
    constructor(data,next=null,prev){
        this.data = data;
        this.prev = data;
        this.next = next;
    }
}

class LL{
    constructor() {
        this.head =null;
        this.size =0;
    }
    add(data){
        this.head = new Node(data,this.head,this.head)
    }
}
let l = new LL()
l.add(4);
l.add(8)
console.log(l)


