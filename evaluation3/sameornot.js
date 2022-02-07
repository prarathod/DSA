function same(arr){
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];

    if(a == b && a!=c){
        return c;
    }else if(a==c && a!=b){
        return b;
    }else if(b==c && b!=a){
        return a;
    }else if(a!==b && a!==c){
        return 0;
    }else if(a==b && b==c){
        return a;
    }
}

function runProgram(input) { 

    let ar  = input.trim().split(" ").map(Number);
    console.log(same(ar))
    

}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2 5 2`);
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