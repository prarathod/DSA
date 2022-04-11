

function runProgram(input) {
    let str = input.trim().split("");
    let temp1 = [],temp2=[],middle;
    let output;
    
    if(str.length%2==0){
        for(var i =0;i<str.length/2;i++){
            temp1.unshift(str[i]);
        }
        for(var i =Math.round(str.length/2);i<str.length;i++){
            temp2.unshift(str[i]);
        }
        output = temp1.join("")+temp2.join("")
    }else{
        middle = str[Math.round(str.length/2)-1];
        for(var i =0;i<(str.length/2)-1;i++){
            temp1.unshift(str[i]);
        }
        for(var i =Math.round(str.length/2);i<str.length;i++){
            temp2.unshift(str[i]);
        }
        output = temp1.join("")+middle+temp2.join("")
    }

    
    console.log(output)


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`jsdfnsgnlewnl`);
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