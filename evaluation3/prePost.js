const ob = (c) => {
    let obj = {
        "+": 1,
        '-': 1,
        "/": 2,
        "*": 2,
        '^': 3
    }
    if (obj[c] !== undefined) {
        return obj[c]
    } else {
        return -1;
    }
}
function runProgram(input) {
    let s =input.trim();
    let stack = [];
    let output = "";
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if ( (char >= '0' && char <= '9') || (char >= 'A' && char <= 'Z') ||(char >= 'a' && char <= 'z')) {
            output += char;
        }
        else if (char == '(') {
            stack.push('(');
        } else if (char == ')') {
            while (stack[stack.length - 1] != '(') {
                output += stack[stack.length - 1];
                stack.pop();
            }
            stack.pop();
        }
        else {
            while (stack.length != 0 && ob(s[i]) <= ob(stack[stack.length - 1])) {
                output += stack[stack.length - 1];
                stack.pop();
            }
            stack.push(char);
        }
    }
    while (stack.length != 0) {
        output += stack[stack.length - 1];
        stack.pop();
    }
    console.log(output);
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
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