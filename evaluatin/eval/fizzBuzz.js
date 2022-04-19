
function fizbuz(num){
    if(num%3==0&&num%5==0){
        return "FizzBuzz";
    }else if(num%3==0){
        return "Fizz";
    }else if(num%5==0){
        return "Buzz";
    }else{
        return num;
    }
}


function runProgram(input) {
    let inp = input.split("\n").map(Number);

    for(var i =1;i<inp.length;i++){
        for(var j = 1;j<=inp[i];j++){
            
            console.log(fizbuz(j));
        }
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
1
3`);
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