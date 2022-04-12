const countChar = (str)=>{
    let output = ''
    for(let i =0;i<str.length;i=2+i){
        for(let j =0;j<Number(str[i+1]);j++){
            output+=str[i];
        }
    }
    return output;
  

}


function runProgram(input) {
    let a = input.trim().split("\n");
    for(let i =2;i<a.length;i=2+i){
        let str = a[i].trim().split("")
        console.log(countChar(str))
    }
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
    6
    a2b1c2
    6
    a2z1a2`);
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