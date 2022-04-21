

const findGCD = (num1, num2) =>{
    if( ! num2) {
        return num1;
    }
return findGCD(num2, num1 % num2);
};
function runProgram(input) {
    let a = input.trim().split("\n");

    for(var i =1;i<a.length;i++){
        let num = a[i].trim().split(" ").map(Number);
        console.log(findGCD(num[0],num[1]))
    }

}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
    6 9
    2 25`);
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