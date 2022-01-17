const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var checkWavePattern = function (head) {
    let hn = head;
    let output = 'true'
    if (hn.data > hn.next.data) {
        hn = hn.next
        temp = -1;
    }
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4  = 0;
    if (hn.data < hn.next.data) {
        hn = hn.next;
        temp = 1;
    }
    while (hn.next !== null) {
        // console.log(head)
        if (temp == -1 && hn.data > hn.next.data) { return false} 
        if (temp == 1 && hn.data < hn.next.data) { return false }
        temp = temp * -1;
        hn = hn.next
    }
    return output;
};


