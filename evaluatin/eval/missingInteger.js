

function runProgram(input) {
    let a = input.trim().split(" ").map(Number);
    a.sort((a,b)=>{
        return a-b;
    })
   
    let str = ["a","c","b" ]
    str.sort()
    console.log(str)

}

if (process.env.USERNAME === 'prajw') {
    runProgram(`4 5 1 3`);
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