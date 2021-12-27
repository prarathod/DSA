function print(ar){
    let count = 0;
for(var i = 0; i<12;i++){
        if(ar[i] == i){
            count++;
        }else{
            console.log(count);
            return;
        }
    }
}
function runProgram(input) {
    let input1 = input.split("\n")
    
    for(var i = 1 ; i<input1.length;i++){
        let ar = input1[i].trim().split(" ").map(Number);
        // console.log(ar);
        print(ar)
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
    0 1 2 4 5 6 9 10 11 12 
    1 2 3 5 7 8 9 10 11 12`);
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