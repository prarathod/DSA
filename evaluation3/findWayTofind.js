
let output = 0;
function powersum(num, value, len, initialize = 0,) {
    if (value == 0) {
        output++;
    }
    let range = Math.floor(Math.pow(num, 1.0 / len));
    for (var j = initialize + 1; j <= range; j++) {
        let temp = value - Math.pow(j, len);
        if (temp >= 0) {
            powersum(num, value - Math.pow(j, len), j, len);
        }
    }
    return output;
}
function runProgram(input) {

    let ar = input.trim().split(" ").map(Number);
    console.log(powersum(ar[0], ar[0], ar[1]));
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`10 2`);
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



