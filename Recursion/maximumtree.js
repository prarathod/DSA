function runProgram(input) {
    let a = input.split("\n")
    let arr = a[1].trim().split(" ").map(Number);
let count  = 0;
    for(var i = 0; i<arr.length;i++){
        if(count<i)
        var num = 0;
        for(var j = i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                num++;
            }
        }
        if(count<num){
            count = num
        }
        num = 0;
    }
    console.log(count)

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`9
  10 22 9 33 21 50 41 60 80`);
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