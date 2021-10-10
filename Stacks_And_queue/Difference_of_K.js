function runProgram(input) {
    let arr = input.trim().split("\n")
    for(var i =2 ; i<arr.length;i=2+i){
        let k = arr[i-1].trim().split(" ").map(Number)
        let ar = arr[i].trim().split(" ").map(Number)
        var count = 0,m=0;n=1;
        while(m<ar.length && m<ar.length){
            if(m!=k&&ar[m]-ar[n]===k[1]){
                count++
                break;
            }else if(ar[n]-ar[m]<k[1]){
                m++
            }else{
                n++;
            }
        }
        if(count===0){
            console.log('No')
        }else{
            console.log("Yes")
        }
    }
    

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`2
  5 3
  1 2 3 4 5
  5 8
  1 2 3 4 5 `);
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