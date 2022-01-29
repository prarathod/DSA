

function runProgram(input) {
    let a = input.split("\n");
    let output = 0;
    let ar = a[1].trim().split(" ").map(Number);
    for(var i=0;i<ar.length;i++){
        if(i==0 && ar[i]===1){
            output+= (110*5);
        }else if( i==1 && ar[i]===1){
            output+= (120*2);
        }else if( i==2 && ar[i]===1){
            output+= (42*2);
        }else if( i==3 && ar[i]===1){
            output+= (53*3);
        }else if( i==4 && ar[i]===1){
            output+= (40*2);
        }else if( i==5 && ar[i]===1){
            output+= (32*5);
        }else if( i==6 && ar[i]===1){
            output+= (126*2);
        }
    }

    console.log(output*a[0].trim().split(" ").map(Number))
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`4
    0 1 1 1 0 0 1`);
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