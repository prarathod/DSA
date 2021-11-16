
function findsub(n,earr){
    if(n==0){
        console.log(arr)
        return
    }
    earr.push(n);
    findsub(n-1,earr);
    earr.pop()
    findsub(n-1,earr)
}
function runProgram(input) {
    let arr = input.split('\n')
    let b = arr[1].trim().split(" ").map(Number);

    console.log(findsub(b.length,b))


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`3 3
    1 2 3`);
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