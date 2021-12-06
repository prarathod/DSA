function sum(num){
    // console.log(num)
    if(num==0 || num ==1){
        return 1;
    }
    if(num<0){
        return 0;
    }

    let total = (sum(num-1))+(sum(num-3))+(sum(num-4));
 
    return total;
}






function runProgram(input) {
    let a = input.trim().split(" ").map(Number);
    console.log(sum(a[0]))


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