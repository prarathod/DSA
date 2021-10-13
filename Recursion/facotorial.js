function runProgram(input) {
    let arr = input.trim().split(" ").map(Number);
    let factMulti = function(n){
        if(n==1){
            return n;
        }
        return n*factMulti(n-1);
    }
    console.log(factMulti(arr[0]));

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`5`);
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