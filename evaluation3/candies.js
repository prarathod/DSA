function candi(arr){
arr.sort((a,b)=>{
    return a-b;
});
let num = 0;
let output = 0;
arr.forEach((elm,i)=>{
    if(elm>arr[i-1]){
        num++;
    }
    output+=num;
})
return output+arr.length-1
}

function runProgram(input) {

    let ar = input.split("\n");
    for (var i = 2; i < ar.length; i = i + 2) {
        let arr = ar[i].trim().split(' ').map(Number);
        console.log(candi(arr))
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
    3 
    1 0 2
    3
    1 2 2
    5
    8 7 6`);
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