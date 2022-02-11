
function maxSubarrayProduct(arr) {
    let n = arr.length;
    let max_ending_here = 1;

    let min_ending_here = 1;

    let max_so_far = 0;
    let flag = 0;

    for (let i = 0; i < n; i++) {

        if (arr[i] > 0) {
            max_ending_here = max_ending_here * arr[i];
            min_ending_here
                = Math.min(min_ending_here * arr[i], 1);
            flag = 1;
        } else if (arr[i] == 0) {
            max_ending_here = 1;
            min_ending_here = 1;
        } else {
            let temp = max_ending_here;
            max_ending_here
                = Math.max(min_ending_here * arr[i], 1);
            min_ending_here = temp * arr[i];
        }

        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here;
    }
    if (flag == 0 && max_so_far == 0)
        return 0;
    return max_so_far;
}

function runProgram(input) {
    let a = input.split("\n");

    for(var i = 2 ;i<a.length;i=2+i){
        let ar = a[i].trim().split(" ").map(Number);

        console.log(maxSubarrayProduct(ar))
    }



}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
    3
    -3 0 -2
    4
    4 5 -1 2`);
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