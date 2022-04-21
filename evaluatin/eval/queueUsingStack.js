class Queue {
    constructor() {
        this.S1 = []
        this.S2 = []
    }
    push(value) {
        while (this.s1.length != 0) {
            this.s2.push(this.s1.pop());

        }
        this.s1.push(value);
        while (this.s2.length != 0) {
            this.s1.push(this.s2.pop());
        }
    }
    pop() {
        let temp = this.s1[this.s1.length - 1];
        this.s1.pop();
        return temp;
    }
    front() {
        console.log(this.s1[this.s1.length-1]);
    }
}


let tempQueue = new Queue();
tempQueue.push(1);
tempQueue.push(2);
tempQueue.push(3);

console.log(tempQueue.pop());
console.log(tempQueue.pop());
console.log(tempQueue.pop());