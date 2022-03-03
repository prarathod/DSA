
function nways(n){
    if(n==1 || n==0){
        return 1;
    };
    if(n<0){
        return 0;
    }

    return nways(n-1)+nways(n-2)+nways(n-3);
}





function runProgram(input) {
    let a = input.split("\n");
    let k = a[0].trim().split(" ").map(Number)[0];
    console.log(nways(k))
    


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