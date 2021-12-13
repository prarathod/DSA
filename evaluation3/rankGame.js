function rankGame(arr, k) {
    arr.sort(function (a, b) { return b - a; });
    let count = 0;
    let rank = 1;
    let char = 0;
    for (var i = 1; i < arr.length; i++) {
        if(arr.length==0){
            return 0;
        }
        if (arr[i - 1] == arr[i]) {
            count++;
        }
        if (arr[i - 1] > arr[i]) {
            rank += count;
            count = 0;
        }
        char++;
        if (rank > k) {
            break;
        }
    }
    return char;

}

function runProgram(input) {
    let ar = input.split("\n");
    for (var i = 2; i < ar.length; i = 2 + i) {
        let arr = ar[i].trim().split(" ").map(Number);
        let k = ar[i - 1].trim().split(" ").map(Number);
        console.log(rankGame(arr, k[1]))
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`1
  5 5
  10 10 10 9 9 9 9 3 3 3 2 1`);
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