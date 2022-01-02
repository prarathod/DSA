
// a + b > c a + c > b b + c > a
function runProgram(input) {
    let input1 = input.split("\n")
    for(var i = 1 ; i<input1.length;i++){
        let ar = input1[i].trim().split(" ").map(Number);
        let a = ar[0],b = ar[1],c=ar[2];
        if(((a + b) > c) && ((a + c) > b) && ((b + c) > a)){
            console.log("Yes");
        }else{
            console.log("No")
        }
        // console.log(ar)
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1`);
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