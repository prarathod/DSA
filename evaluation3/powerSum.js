
    const pwsum = (firstVal, ar, i)=>{
        if(firstVal == 0){
            return 1;
        }
        if(i == ar.length){
            return 0;
        }
        var count = 0;
        count += pwsum (firstVal, ar, i+1);
        count += pwsum (firstVal-ar[i], ar, i+1);
        return count;
    }


function runProgram(input) {
    let arr = input.trim().split(" ").map(Number);
    let firstVal = arr[0];
    let n = arr[1];
    var end = Math.pow(firstVal, 1/n);
    var ar = [];
    for(var i=1; i<=end; i++){
        ar.push(Math.pow(i, n));
    }
    console.log(pwsum(firstVal, ar, 0));
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`10 2`);
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