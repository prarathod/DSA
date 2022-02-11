
function runProgram(input) {
    let a = input.split("\n");
    let s1 = a[0].trim().split("");
    let s2 = a[1].trim().split("");
    let obj = {}
    s2.forEach((elm)=>{
        if(obj[elm]==undefined){
            obj[elm] = 1;
        }else{
            obj[elm]++;
        }
    });
    let out = [];
    s1.forEach((elm)=>{
        if(obj[elm]==undefined){
            out.push(elm);
        }
    });

    console.log(out.join(""))
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`Ay
    ABCD`);
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