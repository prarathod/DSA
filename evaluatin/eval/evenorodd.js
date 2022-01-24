
function localMaxima(arr){
    let count =0;
    if(arr.length<3){
        return -1;
    }else{
        for(var i = 1;i<arr.length-1;i++){
            if(arr[i]>arr[i-1]&&arr[i]>arr[i+1]){
                count++;
            }
        }
    }
    return count;
 
}

function runProgram(input) {
    let input1 = input.split("\n");
    for(var i =2;i<input1.length;i=2+i){
       let arr = input1[i].trim().split(" ").map(Number);
       console.log(localMaxima(arr))
    }
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
    2
    1 2
    10
    884 729 768 201 266 494 597 328 705 287`);
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