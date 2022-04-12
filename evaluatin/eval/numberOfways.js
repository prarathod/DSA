const NumberOFWays = (num)=>{
    if(num==0||num==1){
        return 1;
    }
    if(num<0){
        return 0;
    }
    return NumberOFWays(num-1)+NumberOFWays(num-2)+NumberOFWays(num-3);

}


function runProgram(input) {
    let a = input.trim().split(" ").map(Number)[0];

    console.log(NumberOFWays(a));


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`3`);
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