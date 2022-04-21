// let arr = [-1, -1, -2, 1, -2, 4, 1, 9, 3, 9];
// let k = 3;

const maxSum = (arr, k) => {
    let start = 0, temp = 0, maxSum = 0;

    for (let end = 0; end < arr.length; end++) {
        temp = temp + arr[end];

        if (end >= k - 1) {
            maxSum = Math.max(temp, maxSum);
            temp = temp - arr[start];
            start++;
        }
    }

    return maxSum;
}






function runProgram(input) {
    let a = input.trim().split("\n");


    let arr = a[1].trim().split(" ").map(Number);
    let target = a[0].trim().split(" ").map(Number)[1]
    console.log(maxSum(arr, target))


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
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
