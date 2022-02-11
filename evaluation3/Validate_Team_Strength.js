
function runProgram(input) {
    let a = input.split("\n");
    let ar  = a[0].trim().split(" ").map(Number)[0];
    let arr  = a[1].trim().split(" ").map(Number);
    let fnum = 0;
    let lnum = 0;
    for(let i = 0;i<arr.length;i++){
        if(i<ar[0]){
            fnum+=arr[i];
        }else{
            lnum+=arr[i];
        }
    }
    if(Math.abs(lnum - fnum)<=ar[1]){
        console.log("Valid")
    }else{
        console.log('Invalid')
    }

}

if (process.env.USERNAME === 'prajw') {
    runProgram(`3 0
    1 2 3 4 2 1`);
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