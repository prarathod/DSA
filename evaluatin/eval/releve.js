function props(input){
    let a = input.trim().split(" ").map(Number);
    let n = a[1];
    let count = 0;
    for(var i = 1,j =n-1;i<n/2,j>n/2; i++, j--){
        if((i+j)==n){
            count++;
        }
    }
    return output;
}

function runProgram(input) {
    props(input)
}
if (process.env.USERNAME === 'prajw') {
    runProgram(`1 3`);
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
