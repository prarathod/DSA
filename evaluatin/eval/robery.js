
function robery(ar){
    let output = 0;
    let output1 = 0;

    for(var i = 0 ; i<ar.length;i=2+i){
        if(ar[i]<ar[i+1]){
            output += ar[i+1];
            i++;
        }else{
            output+=ar[i];
        }      
    }

    for(var j =0;j<ar.length;j= 2+j){
        output1+=ar[j]
    }
    if(output>output1){
    return Math.abs(output);
    }else{
        return Math.abs(output1);
    }
}



function runProgram(input) {
    let input1 = input.split("\n")
    for(var i = 2 ; i<input1.length;i=2+i){
        let ar = input1[i].trim().split(" ").map(Number);
        console.log(robery(ar))
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`3
    2
    1 100
    3
    2 100 99
    4
    -100 1 1 -100`);
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