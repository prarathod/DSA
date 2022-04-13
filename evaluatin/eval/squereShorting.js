    
function runProgram(input) {
    let input1 = input.split("\n");
    for(var i =2;i<input1.length;i=i+2){
        let num1 = input1[i].trim().split(" ").map(Number)
        let num = input1[i].trim().split(" ").map(Number).map((x)=>{
            return Math.abs(x*x);
        });
        let n = [];
        num.forEach(element => {
            n.push(element);
        });
        let num2 = n.sort((a,b)=>{
            return a-b;
        })

        let output = [];
        n.forEach((elm)=>{
            output.push(num1[num.indexOf(elm)]);
        })
        console.log(output.join(" "))

    }
    



}

if (process.env.USERNAME === 'prajw') {
    runProgram(`1
    5
    -2 3 1 -4 6`);
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