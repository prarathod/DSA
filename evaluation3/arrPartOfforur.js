
function runProgram(input) {
    var aInput = input.split("\n");
    var arr = aInput[1].trim().split(" ").map(Number);
    var sum1,sum2,sum3,sum4;

    for(var i =0;i<arr.length;i++){
        if(i<arr.length/4){
            sum1+=arr[i];
        }else if(i>=arr.length/4 && i<arr.length/4*2){
            sum2+=arr[i];
        }else if(i>=arr.length/4*2 && i<arr.length/4*3){
            sum3+=arr[i];
        }else{
            sum4+=arr[i];
        }
    }
    var sum = 2*sum1 + sum2 + 2*sum3 + sum4
    console.log(sum)


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`8
    1 2 3 4 5 6 7 8`);
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