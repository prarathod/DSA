
function runProgram(input) {
    let a = input.split("\n");
    let ar = a[1].trim().split(" ").map(Number);
    let num = 0;
    for(let i = 0;i<ar.length;i=i+2){
        num+=ar[i]
    }
    console.log(num)



}

if (process.env.USERNAME === 'prajw') {
    runProgram(`7
    4 5 5 5 6 6 7`);
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