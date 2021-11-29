// 4
// 5 10 6 8 9 7 6 5 4 

function angry(arr) {
    let maxAnger = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i == 0) {
            let a = arr[i + 1] - arr[i]
            let b = arr[i + 2] - arr[i]
            if (a <= b) {
                maxAnger = b;
            } else {
                maxAnger = a;
            }
        } else if (i == arr.length - 1) {
            let a = arr[i] - arr[i - 1];
            if (maxAnger < a) {
                maxAnger = a;
            }
        } else {
            if (arr[i + 2] != undefined) {
                let a = arr[i + 2] - arr[i]
                if (maxAnger < a) {
                    maxAnger = a;
                }
            }

        }
    }
    return maxAnger;
}





function runProgram(input) {
    let a = input.trim().split("\n")

    let arr = a[1].trim().split(" ").map(Number)
    arr.sort((a,b)=>{
        return a-b;
    })
    console.log(angry(arr))
    
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`4
    5 10 6 8`);
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