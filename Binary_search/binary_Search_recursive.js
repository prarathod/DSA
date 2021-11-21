function search(arr,n,i=0){
    if(arr[i]==n){
        return 1;
    }
    if(arr.length==i){
        return -1;
    }
    return search(arr,n,++i)
}


function runProgram(input) {
    let arr = input.trim().split("\n");
    let ar = arr[1].trim().split(" ").map(Number)
    let k = arr[0].trim().split(" ").map(Number);
    console.log(search(ar,k[1]))

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`5 10
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