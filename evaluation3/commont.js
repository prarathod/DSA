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
    if (hn.data < hn.next.data) {
        hn = hn.next;
        temp = 1;
    }
    while (hn.next !== null) {
        if (temp == -1 && hn.data > hn.next.data) { return false} 
        if (temp == 1 && hn.data < hn.next.data) { return false }
        temp = temp * -1;
        hn = hn.next
    }
    
    return output;

};


