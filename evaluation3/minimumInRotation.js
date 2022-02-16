

function runProgram(input) {
    let inp = input.split('\n');
    let arr = inp[1].trim().split(" ").map(Number);
    let start = 0;
    let end = arr.length - 1;
    let output = 0;

    while (start <= end) {
        let mid = Math.floor(start + ((end - start) / 2));
        if ((arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]) || (arr[mid] < arr[mid + 1] && arr[mid - 1] == undefined) || (arr[mid + 1] == undefined && arr[mid] < arr[mid - 1])) {
            output = mid;
            break;
        } else if (arr[mid] > arr[end]) {
            start = mid + 1;
            output = mid;
        } else if (arr[mid] > arr[start]) {
            end = mid - 1;
            output = mid;
        } else {
            end = mid;
            output = mid;
        }
    }

    console.log(arr[output]);


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`10
    2 3 4 5 6 7 8 9 10 11 12 13 14`);
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