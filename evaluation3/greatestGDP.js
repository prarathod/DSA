function gcd(num1, num2, d=num2) {
    if (num2 == 0){
        return 0;
    }
    if (((num1 % d) == 0) && ((num2 % d) == 0)){
        return d;
    }else{

        d--;
        return gcd(num1, num2, d);
    }
}


function runProgram(input) {
    let a = input.split("\n");
    for (var i = 1; i < a.length; i++) {
        let arr = a[i].trim().split(" ").map(Number);

        if(arr[1]>arr[0]){
            console.log(gcd(arr[1], arr[0]))
        }else{
            console.log(gcd(arr[0], arr[1]))
        }
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