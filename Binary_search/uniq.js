
function runProgram(input) {
    let arr = input.trim().split("\n");
    for (var i = 2; i < arr.length; i = 2 + i) {
        let ar1 = arr[i].trim().split(" ").map(Number);
        let ar = new Array();

        ar1.forEach((elm) => {
            if (ar[elm] == undefined) {
                ar[elm] = 1;
            } else {
                ar[elm]++;
            }
        })
        console.log(ar.indexOf(1))
    }





}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
  1
  5
  5
  1 2 1 3 2`);
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