function duplicate(num){
    let obj = {}
    num.forEach((elm)=>{
        if(obj[elm]==undefined){
            obj[elm] =1;
        }
    });
    let output = Object.keys(obj);
    return `${output.length}\n${output.join(" ")}`;
}

function runProgram(input) {
    let arr = input.split('\n')
    for(var i =2;i<arr.length;i=2+i){
        let num = arr[i].trim().split(" ").map(Number);
        console.log(duplicate(num))
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
    3
    1 1 2
    4
    1 1 3 3`);
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