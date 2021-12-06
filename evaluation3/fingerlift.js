function runProgram(input) {
    let a = input.split("\n")
    for(var i  = 1;i<a.length;i++){
        let arr = a[i].trim().split("");
        let count =0;
        let temp="";
        for(var j = 0 ;j<arr.length;j++){
            if(arr[j]!=temp){
                count++;
                temp = arr[j]
            }
        }
        console.log(count)
    }



}

if (process.env.USERNAME === 'prajw') {
  runProgram(`2
  aaaaa
  abbbaaz`);
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