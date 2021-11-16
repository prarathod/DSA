
function runProgram(input) {
    let a = input.split('\n')

    let arr = a[1].trim().split(" ").map(Number);

    console.log(arr)
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`5
  `);
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