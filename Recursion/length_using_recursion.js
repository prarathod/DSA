function runProgram(input) {
    let str = input.trim()
    // console.log(str)

    function lenStr(str){
        if(str ===""){
            return 0;
        }else{
            // console.log(str.substring(1))
            return 1+ (lenStr(str.substring(1)))

        }
        
    }
    console.log(lenStr(str))

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`Tuesday`);
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