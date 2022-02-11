function sumArray(arr){
    if(arr.length==1){
        if(arr[0]%2==0){
            return "YES";
        }else{
            return 'NO';
        }
    }
    let num = 0;
    arr.forEach((elm)=>{
        num+=elm;
    })
    if(num%2==0){
        return "YES";
    }else{
        return 'NO';
    }
}
function runProgram(input) {
    let a = input.split("\n");
    for (var i = 2; i < a.length; i = 2 + i) {
        let s1 = a[i].trim().split(" ").map(Number);
        console.log(sumArray(s1))
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
    1
    2
    3
    1 2 3`);
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