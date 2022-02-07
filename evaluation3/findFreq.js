function frq(arr) {
    let obj = {};
    if (arr.length === 0) {
        return -1;
    }
    arr.forEach((elm) => {
        if (obj[elm] === undefined) {
            obj[elm] = 1;
        } else {
            obj[elm]++;
        }
    })
    // console.log(obj);
    let output = 0;
    let temp = 0;
    let a = [];

    arr.forEach((elm) => {
        if (obj[elm] > arr.length / 3) {
            if (a.includes(elm)) {

            } else {
                a.push(elm)
            }
        }
    });
    a.sort((a, b) => { return a - b });
    return a.join(" ")
}

function runProgram(input) {
    let a = input.split("\n");


    let ar = a[1].trim().split(" ").map(Number);
    console.log(frq(ar))


}


if (process.env.USERNAME === 'prajw') {
    runProgram(`3
    3 2 3`);
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

