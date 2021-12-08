
function runProgram(input) {
    let a = input.trim().split("").map(Number);
    let evenArr = [];
    let output = '';
    for(var i = 0 ; i<a.length;i++){
        if(a[i]%2==0){
            evenArr.push(a[i])
        }
    }
    for(var j = 0;j<a.length;j++){
        if(a[j]==evenArr[0]){
            output +=evenArr.length+" ";
            evenArr.shift();
        }else{
            output +=evenArr.length+" ";
        }
    }

    console.log(output)
 

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`574674546476`);
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