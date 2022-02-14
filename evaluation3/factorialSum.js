function runProgram(input) {
    let ar = input.split("\n");
    for(var m = 1;m<ar.length;m++){
        let N = ar[m].trim().split(" ").map(Number)[0];
        var tempArr = [], len = 1, ans = 0;
        tempArr[0] = 1;
        for (var j = 1; tempArr[j - 1] <= N; j++) {
            tempArr[j] = (tempArr[j - 1] * j);
            len++;
        }
        for (var k = len - 1; k >= 0; k--) {
            while (N >= tempArr[k]) {
                N -= tempArr[k];
                ans++;
            }
        }
        console.log(ans);
   
    }
    

 

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`2
  9
  10`);
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