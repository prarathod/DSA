
// function runProgram(input) {
//   let arr = input.trim().split(" ").map(Number)[0];
//   output = [],output[0] = 1,output[1] = 1,output[2] = 2;
//   for (let k = 3; k <= arr; k++) {
//     output[k] = output[k - 1] + output[k - 2] + output[k - 3];
//   }
//   console.log(output[arr])
// }

// if (process.env.USERNAME === 'prajw') {
//   runProgram(`4`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

// var x = 23;

// (function(){
//   var x = 43;
//   (function random(){
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })();

// const a = 5;
// age = 5;
// console.log(delete(age))


const sum = eval('10*10+5')
console.log(sum)