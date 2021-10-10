// class Program {                         
//     constructor(){
//         console.log('hello is working')
//     }
// }

// new Program()


// /*

// class Program{}
// class => class ye hamesha small me likhe ye case sensitive hota hai.
// Program => Program ka P hamesha Capital rakhe because its a class and capital rakhana achhi practice hoti hai

// new Program() => jab bhi hum new Program () call karte hai to constractor function automaticaly call ho jata hai .

// */
// // accesing value form class constructor function


// class Demo {
//     constructor(x) {
//         this.name = x;
//     }
//     disply() {
//         console.log(this.name)
//     }
// }
// b1 = new Demo("prajwal");
// b2 = new Demo("Rathod");
// b1.disply()
// b2.disply()


// // disply output using return 

// class Pro{
//     constructor(f,l){
//         this.f_name = f;
//         this.l_name = l;
//     }
//     disply(){
//         return `Full Name is ${this.f_name} ${ this.l_name}`
//     }
// }
// a = new Pro("Prajwal","Rathod")
// console.log(a.disply())





// // pop() and push() medhod in stack using constactor function 

// class Stack {

//     constructor(){
//         this.arr = [1];
//         console.log("stack is ready to use")
//     }
//     pushElm(el){
//         this.arr.push(el)
//         console.log(`${el} is pushed in arr ${this.arr}`)
//     }
//     isEmpty(){
//         if(this.arr.length==0){
//             return true;
//         }else{
//             return false;
//         }
//     }

// }

// var obj = new Stack()
// console.log(obj.isEmpty())
// obj.pushElm(4)



// class Stack1{
//     constructor(){
//         this.arr=[]
//     }
//     pushElem(elm){
//         this.arr.push(elm)
//         console.log(`${elm} is pushed in arr = ${this.arr}`)
//     }
//     isEmpmty(){
//         if(this.arr.length==0){
//             return true;
//         }else{
//             return false;
//         }
//     }
//     popElem(){
//         if(this.isEmpmty() == false){
//             let a = this.arr.pop();
//             console.log(a)
//         }else{
//             console.log(`arr is empty`)
//         }
//     }

// }

// var obj1 = new Stack1()
// obj1.pushElem(8)
// obj1.pushElem(83)
// obj1.popElem()


class Queue{
    constructor(){
        this.arr = [];
        this.front = 0;
    }
    
    push(a){
        this.arr.push(a);
    }
    
    pop(){
        if(this.arr.length != this.front){
            let x = this.arr[this.front];
            this.front++;
            return x;
        }
        else
            return -1;
    }
    
    front_ele(){
        return this.arr[this.front];
    }
    
    empty(){
        if(this.arr.length != this.front)
            return false;
        else
            return true;
    }
}

class Solution {
    //Function to reverse the queue.
    rev(q) {
        //using a stack to reverse the queue.
        let s = [];

        //pushing elements from queue into stack and removing them from queue.
        while (!q.empty()) {
            s.push(q.front_ele());
            q.pop();
        }
        //creating new queue.
        let a = new Queue();

        //now pushing elements back into the queue from stack and removing them 
        //from stack. queue gets reversed as stack follows last in first out.
        while (s.length > 0) {
            a.push(s[s.length - 1]);
            s.pop();
        }
        //returning reversed queue.
        return a;
    }
}

var obj = new Solution();
console.log(obj.rev(6 +"\n" +4,3,1,10,2,6))