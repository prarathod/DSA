
function runProgram(input) {
    let a = input.split("\n");
    let k = a[0].trim().split(" ").map(Number)[1];
    let ar = a[1].trim().split(" ").map(Number);
    let num = 0;
    ar.sort((a,b)=>a-b);
    let i = 0;
    let output = 0;
    while(num<=k){
        output = i;
        num+=ar[i]
        i++;
    }
    console.log(output)
   



}

if (process.env.USERNAME === 'prajw') {
    runProgram(`4 20
    3 10 4 4 `);
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