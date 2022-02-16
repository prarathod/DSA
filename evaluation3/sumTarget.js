

function runProgram(input) { 
    let inp = input.split('\n');
    let ar  = inp[1].trim().split(" ").map(Number);
    let target = inp[0].trim().split(" ").map(Number)[1];
    ar.sort((a,b)=>{
        return a-b
    });

    let count =0;
    let start =0;
    let end = ar.length-1;
    while(start<end){
        if(ar[start]+ar[end]==target){
            count++;
            start++;
        }
        if(ar[start]+ar[end]<target){
            start++;
        }else{
            end--;
        }
    }
    console.log(count)
    

}

if (process.env.USERNAME === 'prajw') {
    runProgram(`5 9
    3 0 6 2 7`);
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