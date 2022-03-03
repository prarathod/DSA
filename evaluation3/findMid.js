
function runProgram(input) {
    let a = input.split("\n");
    let ar = a[1].trim().split(" ").map(Number);
    let stack = [];
    for(var i = ar.length-1;i>=0;i--){
        let count = 0;
        for(var j = i-1;j>=0;j--){
            if(ar[i]<ar[j]){
                count++;
                break;
            }
        }
        if(count==0){
            stack.unshift(ar[i]);
        }else{
            break;
        }
    }
    if(stack[0]==undefined){
        console.log(-1)
    }else{
        console.log(stack[0])
    }
    


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`5
    4 3 6 7 8`);
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