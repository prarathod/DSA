function runProgram(input) {
    let arr = input.split('\n')
    let queue = []
    for(var i =1;i<arr.length;i++){
      let cond = arr[i].trim().split(" ")
      if(cond[0]==="E"){
        queue.push(cond[1])
        console.log(queue.length)
      }else if (cond[0]==="D"){
        if(queue.length===0){
          console.log("-1 0")
        }else{
          console.log(queue.shift()+" "+ queue.length)
        }
      }

    }

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`5
  E 2
  D
  D
  E 3
  D`);
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