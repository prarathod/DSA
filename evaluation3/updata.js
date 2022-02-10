/* 3
2.0.1
1.9.8
12.0.1
12.10.0
1.1.10
1.1.12

*/

function runProgram(input) {

    let ar = input.split("\n");
    for (var i = 1; i < ar.length; i = i + 2) {
        let c = ar[i].trim().split('.').map(Number);
        let d = ar[i+1].trim().split('.').map(Number);
        if(c[0]==d[0]){
            console.log("True");
        }else{
            console.log("False");
        }
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`3
  2.0.1
  1.9.8
  12.0.1
  12.10.0
  1.1.10
  1.1.12`);
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