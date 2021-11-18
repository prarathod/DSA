function search(arr,n){
    for(var i = 0  ;i<arr.length;i++){
        if(arr[i]==n){
            return 1;
        }
    }
    return -1;
}


function runProgram(input) {
    let arr = input.trim().split("\n");
    let ar = arr[1].trim().split(" ").map(Number)
    let k = arr[0].trim().split(" ").map(Number);
    console.log(search(ar,k[1]))

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`5 0
  2 -2 0 3 4`);
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