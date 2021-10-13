
function runProgram(input) {
  let arr = input.split("\n");
  for (var i = 2; i < arr.length; i = 2 + i) 
    let ar = arr[i].trim().split(" ").map(Number);
    let len =Number(arr[i-1])
    sum = 0;

    let find = (ar,len)=> {
      if(len == 1){
        return sum;
      }
      sum = sum+ Math.abs(ar[len-1]-ar[len-2] )
      len = len-1
      return find(ar,len)
    }
    console.log(find(ar,len))
  }
}
if (process.env.USERNAME === 'prajw') {
  runProgram(`2
3
1 5 2
5
3 5 6 1 8`);
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