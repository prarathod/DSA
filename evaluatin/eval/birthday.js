const lst = (a, used, si, ci, k)=> {
    if (ci === k) {
        let temp = []
      for (var i = 0; i < a.length; i++) {
        if (used[i])
        temp.push(a[i])
       
      }
      console.log(temp.join(" "));
      return;
    }
      
    if (si === a.length)
      return;
      
    used[si] = true;
    lst(a, used, si+1, ci+1, k);
  
    used[si] = false;
    lst(a, used, si+1, ci, k);
  }
  
  



function runProgram(input) {
    let a = input.trim().split(" ").map(Number);

  let inp=[]
  for (var i = 1;i<=a[0];i++){
      inp.push(i)
  }
  lst(inp, Array(input.length).fill(false), 0, 0, a[1]);

}

if (process.env.USERNAME === 'prajw') {
    runProgram(`4 2`);
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