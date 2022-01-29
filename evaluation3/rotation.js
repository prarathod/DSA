

function runProgram(input) {
    let a = input.split("\n");
    let obj = {};
    for (var i = 1; i < a.length; i ++) {
        let str = a[i].trim();
        if(obj[str]===undefined){
            obj[str]= 1;
        }else{
            obj[str]++;
        }
        
    }
    let output = Object.keys(obj);
    output.sort()
    
    output.forEach((elm)=>{
        console.log(elm+" "+obj[elm])
    })



}

if (process.env.USERNAME === 'prajw') {
    runProgram(`5
    d
    f
    g
    a
    z`);
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