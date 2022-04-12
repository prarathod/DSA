function nextGreater(arr) {
    let stack = [], output = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (stack.length == 0) {
            output.unshift(-1);
            stack.push(arr[i]);
        }else if (stack[stack.length - 1] > arr[i]) {
            output.unshift(stack[stack.length - 1]);
            stack.push(arr[i]);
        }else if (stack[stack.length - 1] <= arr[i]) {
            while ((stack[stack.length - 1] <= arr[i]) && stack.length != 0) {
                stack.pop();
            }

            if (stack.length == 0) {
                output.unshift(-1);
                stack.push(arr[i]);
            }else if (stack[stack.length - 1] > arr[i]) {
                output.unshift(stack[stack.length - 1]);
                stack.push(arr[i]);
            }

        }
    }
    return output.join(" ");
}


function runProgram(input) {
    let a = input.trim().split("\n");
    for (let i = 2; i < a.length; i = 2 + i) {
        let str = a[i].trim().split(" ").map(Number)
        console.log(nextGreater(str))
    
    }
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`1
    4
    1 3 2 4`);
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