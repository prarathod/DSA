function runProgram(input) {
  let ar = input.split('\n')
  let str = ar[1].trim().split(' ').map(Number)
  let stack = [];
  let ans = []
  let output = ''

  for (var i = str.length-1; i >=0;i--) {
      for(var j = i;j>0;j--){

        if(str[i]<str[j]){
          ans.unshift(-1);
          break;
        }else if(str[i]>str[j]){
          ans.unshift(str[j])
          break;
        }
      }
console.log(ans)
    
  }
}

if (process.env.USERNAME === 'prajw') {
  runProgram(`8
  10 10 10 10 10 10 10 10`);
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