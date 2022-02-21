

function runProgram(input) {

    let ar = input.split("\n");
    for (var i = 2; i < ar.length; i = 2 + i) {
        let arr = ar[i].trim().split(' ').map(Number);
        arr.sort((a,b)=>{
            return b-a;
        })

        console.log(arr[0]*[arr[1]])
        
    }

}
if (process.env.USERNAME === 'prajw') {
    runProgram(`3
    6 
    1 0 7 2 4 0
    5
    1 2 3 4 5
    2
    0 0`);
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
