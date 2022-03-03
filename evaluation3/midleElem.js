
function runProgram(input) {
    let a = input.split("\n");
    let ar = a[1].trim().split(" ").map(Number);
    let k = a[0].trim().split(" ").map(Number)[1];
    let obj = {};
    ar.forEach((elm)=>{
        if(obj[elm]==undefined){
            obj[elm] = 1;
        }else{
            obj[elm]++;
        }
    })
    console.log(obj[k])
    


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`6 3
    2 3 3 3 6 9`);
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