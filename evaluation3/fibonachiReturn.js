
function runProgram(input) {
  
    let num = input.trim().split(" ").map(Number);
    // console.log(num)
    function fiboReturn(num){
        if(num<=1){
            return num;
        }
        return fiboReturn(num-2)+fiboReturn(num-1);
    }
    console.log(fiboReturn(num));


}

if (process.env.USERNAME === 'prajw') {
  runProgram(`45`);
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
