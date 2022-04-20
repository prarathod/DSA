function nearestSmaller(arr) {

    let tempArr = [];
    let output = []

    for (let i = 0; i < arr.length; i++) {
        while ((tempArr.length != 0) &&
            (tempArr[tempArr.length - 1] >= arr[i])) {
            tempArr.pop();
        }
        if (tempArr.length == 0) {
            output.push(-1)
        } else {
            output.push(tempArr[tempArr.length - 1])
        }
        tempArr.push(arr[i]);
    }
    return output.join(" ");
}






function runProgram(input) {
    let arr = input.split('\n')

    let num = arr[1].trim().split(" ").map(Number);
    console.log(nearestSmaller(num));



}

if (process.env.USERNAME === 'prajw') {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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