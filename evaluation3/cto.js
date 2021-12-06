function runProgram(input) {
    let a = input.split("\n")
    let arr = a[1].trim().split(" ").map(Number);
    let count =-1;
    for(var i = 0;i<arr.length;i++){
        if(arr[i]==1){
            console.log(i);
            count++;
            break;
        }
 
    }
if(count==-1){
 console.log(count)
}

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`5
  0 0 0`);
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