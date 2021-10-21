function GreekSeries(n){
  // console.log(n)
  if(n==1){
    return 1;
  }
  if(n==2){
    return 2;
  }
  if(n==3){
    return 3
  }

  let a = GreekSeries(n-1)
  let b = GreekSeries(n-2)
  let c = GreekSeries(n-3);
  return a+b+c
}


function runProgram(input) {
  let arr = input.split('\n');
  for (var i = 1; i < arr.length; i++) {
    let input1 = arr[i].trim().split(" ").map(Number);
    console.log(GreekSeries(input1[3]))
  }


}

if (process.env.USERNAME === 'prajw') {
  runProgram(`3
  1 3 2 4
  1 3 2 5
  1 3 2 6`);
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