
function runProgram(input) {
    let ar = input.trim().split(" ").map(Number);
    let num = ar[0];
    let num1 = ar[1]
    let output;
    if(ar[0]<ar[1]){
        while(num<ar[1]){
            let n = num.toString().split("").map(Number);
            // console.log(n)
            num = num + n[0]+n[1];
            if(num==ar[1]){
            output = num;
            }
        }
    }else{
        while(num1<num){
            let n = num1.toString().split("").map(Number);
            // console.log(n)
            num1 = num1 + n[0]+n[1];
            if(num1==num){
                output = num1;
            }
        }
    }
    
    if(output ===undefined){
        let count = 0;
        while(count>=10){
            if(num>num1){
                num = num*2;
            }else{
                num1 = num1*2;
            }
        if(ar[0]<ar[1]){
            while(num<ar[1]){
                let n = num.toString().split("").map(Number);
                // console.log(n)
                num = num + n[0]+n[1];
                if(num==ar[1]){
                output = num;
                }
            }
        }else{
            while(num1<num){
                let n = num1.toString().split("").map(Number);
                // console.log(n)
                num1 = num1 + n[0]+n[1];
                if(num1==num){
                    output = num1;
                }
            }
        }
    }
    if(output==undefined){
        console.log(-1);
    }else{
        console.log(output);
    }
    }else{
        console.log(output)
    }
    




}

if (process.env.USERNAME === 'prajw') {
    runProgram(`32 47`);
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