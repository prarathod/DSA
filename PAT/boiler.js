

function runProgram(input) {
    let a = input.split("\n")
    let ar = [];
    for(var i = 1;i<a.length;i++){
        ar.push(Number(a[i].trim()))
    }
    ar.sort((a,b)=>{
        return b-a;
    })
    console.log(ar[1])
    
   
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`3
10
    20
    30`);
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