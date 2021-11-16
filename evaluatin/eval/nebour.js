function runProgram(input) {
    let a = input.trim().split('\n')
    let arr = a[1].trim().split(" ").map(Number);
    let count = 1;
    let last = arr[arr.length-1];
    for (var i = arr.length-2; i >=0; i--) {
        if(arr[i] < last){
            last = arr[i]
            count++;
        }
    }
    console.log(count)

}
if (process.env.USERNAME === 'prajw') {
    runProgram(`5
    4 2 1 3 7`);
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
