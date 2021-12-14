/*
1
4 5
1 8
2 4
3 0
2 5
2 3
*/



function runProgram(input) {
    let a = input.trim().split("\n");
    let ar = [];
    for(var i = 1 ; i<a.length;i++){
        let b = a[i].trim().split(" ").map(Number);
        ar.push(b[1])

    }
    ar.sort((a,b)=>{
        return a-b;
    })
    console.log(ar[ar.length-2] +ar[ar.length-1] )
    



}

if (process.env.USERNAME === 'prajw') {
    runProgram(`1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`);
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