


function runProgram(input) {
    let input1 = input.split("\n");

    let day = input1[0].trim();
    let N = input1[1].trim().split(" ").map(Number)[0];

    let arr = ["",'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    let countnt = arr.indexOf(day);
    let dd = Math.floor((countnt+N)%7);
 
    if(dd==0){
        console.log("Sunday")
    }else{
        console.log(arr[dd])

    }
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`Saturday
    36`);
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