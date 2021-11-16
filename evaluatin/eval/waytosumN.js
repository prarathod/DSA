
function countWays(n) {
    var DP = [];
    DP.fill(0);

    DP[0] = DP[1] = DP[2] = 1;
    DP[3] = 2;
    for (var i = 5; i <= n; i++){
        DP[i] = DP[i - 1] + DP[i - 2] +DP[i - 5];
    }
       

    return DP[n];
}

var n = 5;

console.log("count", countWays(n));









function runProgram(input) {
    let a = input.trim().split('\n')

    for (var i = 1; i < a.length; i++) {
        let arr = a[i].trim().split(" ").map(Number);
        // if (arr == 1) {
        //     console.log(1)
        // } else {
        //     console.log(countWays(arr) + 1);
        // }

    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`1
5`);
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
