
function runProgram(input) {
    let arr = input.split("\n")

    let food = []
    for (var i = 1; i < arr.length; i++) {

        let cond = arr[i].trim().split(" ").map(Number)
   
        
        if (cond[0] === 2) {
            food.push(cond[1])
        }

        if (cond[0] ===1) {
            if (food.length !== 0) {
                console.log(food.pop())
            } else {
                console.log('No Food')
            }


        }


    }
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`6
    1
    2 5
    2 7
    2 9
    1
    1`);
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