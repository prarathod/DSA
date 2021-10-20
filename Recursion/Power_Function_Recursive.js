function power(a,n) {
    console.log("y")
    if ( n == 0 ) {
        return 1;
    }
    return ( a * power(a,n-1));

}



function runProgram(input) {
    let arr = input.trim().split(" ").map(Number)
    console.log(power(arr[0],arr[1]))

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`2 3`);
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