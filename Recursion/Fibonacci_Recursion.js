function runProgram(input) {
    let arr = input.trim().split(" ").map(Number);
    let factMulti = function(n){
        if(n==1|| n ==0){
            return n;
        }
        return factMulti(n-1)+ factMulti(n-2);
    }
    console.log(factMulti(arr[0]));

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`4`);
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