

function gas(ar, arr) {
    let petrol = 0;
    let output = 0;
    let temp = 0;
    for (let i = 0; i < ar.length; i++) {
        petrol = petrol + ar[i] - arr[i];
        temp = temp + (ar[i] - arr[i]);
        if (petrol < 0) {
            output = i + 1;
            petrol = 0;
        }
    }
    if (temp < 0) {
        output = -1;

    }
    return output;
}



function runProgram(input) {
    let a = input.split("\n");
    let ar = a[1].trim().split(" ").map(Number);
    let arr = a[2].trim().split(" ").map(Number);
    console.log(gas(ar,arr))


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`5
    1 2 3 4 5
    3 4 5 1 2`);
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