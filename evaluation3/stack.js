
function runProgram(input) {
    let a = input.split("\n");
    let stack = [];
    let minStack = [];

    for (var i = 1; i < a.length; i++) {
        let arr = a[i].trim().split(" ");
        if (arr[0] == 'PUSH') {
            stack.push(Number(arr[1]))

            if (minStack.length == 0) {
                minStack.push(Number(arr[1]));
            } else {
                if (minStack[minStack.length - 1] >= Number(arr[1])) {
                    minStack.push(Number(arr[1]));
                }
            }
        }

        if (arr[0]=='POP'){
            if(stack.length==0){
                console.log('EMPTY');
            }else{
                let a = stack.pop();
                if(minStack[minStack.length-1]==a){
                    minStack.pop();
                }
            }
        }
         
        if (arr[0]=='MIN'){
            console.log(minStack[minStack.length-1])
        }
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`11
    PUSH 5
    PUSH 7
    PUSH 3
    PUSH 8
    PUSH 10
    MIN
    POP
    POP
    MIN
    POP
    MIN`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}