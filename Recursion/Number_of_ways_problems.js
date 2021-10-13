function runProgram(input) {
    let arr = input.trim().split(' ').map(Number)

    function find(n) {

        if (n == 1 || n == 0) {
            return 1;

        } else if (n == 2) {
            return 2;

        } else{
            return find(n - 3) + find(n - 2) + find(n - 1);
        }
            
    }
    console.log(find(arr[0]))

}

if (process.env.USERNAME === 'prajw') {
    runProgram(`4`);
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