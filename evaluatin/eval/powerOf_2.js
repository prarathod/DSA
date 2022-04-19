function power(num) {
    if (num == 0) {
        return 0;
    }
    while (num != 1) {
        if (num % 2 != 0){
            return 0;
        }
        num = num / 2;
    }
    return 1;
}


function runProgram(input) {
    let inp = input.split("\n").map(Number);

    for(var i =1;i<inp.length;i++){
            
        if(power(inp[i])){
            console.log("True")
        }else{
            console.log("False")
        }

    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
1
3`);
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
