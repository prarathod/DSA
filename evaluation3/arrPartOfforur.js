
function runProgram(input) {
    let a = input.split("\n");
    let ar = a[1].trim().split(" ").map(Number);
    let div = ar.length/4;
    
    let c1 = 0,c2=0,c3=0,c4=0;

    for(var i =0;i<ar.length;i++){
        if(i<div){
            c1+=ar[i];
        }else if(i>=div && i<div*2){
            c2+=ar[i];
        }else if(i>=div*2 && i<div*3){
            c3+=ar[i];
        }else{
            c4+=ar[i];
        }
    }
    let equation = 2*c1 + c2 + 2*c3 + c4
    console.log(equation)


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