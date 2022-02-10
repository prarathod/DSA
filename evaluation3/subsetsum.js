
// const subsum = (arr, len, target) => {
//     if (target == 0) {
//         return true;
//     }
//     if (len == 0) {
//         return false;
//     }
//     if (arr[len - 1] > target) {
//         return subsum(arr, len - 1, target);
//     }
//     return subsum(arr, len - 1, target) || subsum(arr, len - 1, target - arr[len - 1]);
// }
// function runProgram(input) {

//     let ar = input.split("\n");

//     let arr = ar[1].trim().split(' ').map(Number);
//     target = ar[1].trim().split(' ').map(Number)[0];
//     let output = subsum(arr, arr.length, target);
//     if (output == true) {
//         console.log("yes");
//     } else {

//         console.log("no");
//     }

// }

// if (process.env.USERNAME === 'prajw') {
//     runProgram(`9
//     1 2 3 4 5 6 7 8 9
//     5`);
// } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//         read += input;
//     });
//     process.stdin.on("end", function () {
//         read = read.replace(/\n$/, "");
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//     });
//     process.on("SIGINT", function () {
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//         process.exit(0);
//     });
// }


let arr = [0 ,2, 4, 4 ,5, 5, 7, 7, 9, 10];

