
function runProgram(input) {
    let input1 = input.split("\n")
    let ar = input1[1].trim().split(" ").map(Number);
    let output = "";
    for(var i = 3 ;i<input1.length;i++){
        let k = input1[i].trim().split(" ").map(Number);
        let count = 0;
       let L = k[0];
       let R = k[1];
       ar.forEach((elm)=>{
           if(L<= elm && R>=elm){
               count++;
           }
       })
       output+= count +" ";
    }
    console.log(output)


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`5
    10 1 10 3 4
    4
    1 10
    2 9
    3 4
    2 2`);
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