function count(arr,target){
    let count = 0;
    let start = 0;
    let end = arr.length-1;

    for(var i = 0; i<arr.length;i++){
        if(arr[i]<target){
            count++;
        }
    }
    
    return count;
}



function runProgram(input) {
    let ar = input.trim().split("\n");
    let arr = ar[1].trim().split(" ").map(Number);
    for(var i = 3;i<ar.length;i++){
        let target = ar[i].trim().split(" ").map(Number);

        console.log(count(arr,target[0]))
    }
   


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`5
    1 4 10 5 6
    4
    2
    3
    5
    11`);
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