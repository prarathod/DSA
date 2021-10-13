function runProgram(input) {
    let arr  =  input.trim().split(" ").map(Number)
    var str = ''

    let no = (n)=>{
        if(n===0){
            return str;
        }
        str = n +" "+str
        return no(n-1)
    }
    console.log(no(arr[0]))

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`15`);
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