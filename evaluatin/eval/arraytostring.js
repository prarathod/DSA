
function runProgram(input) {
    let a = input.trim().split("\n");
    let output = "";
    let arr = a[1].trim().split(" ").map(Number).map((e)=>{
        if(e<0){
            output+=0
        }else{
            output+=e;
        }
    });

    

    console.log(output)


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`5
    2 -4 6 8 -9`);
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