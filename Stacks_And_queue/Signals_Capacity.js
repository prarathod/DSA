function runProgram(input) {

  const arr = input.split("\n")
  for (var i = 2; i < arr.length; i = 2 + i) {
    let cond = arr[i].trim().split(' ').map(Number)

    // making on stack for index and another for greater number;
    let stack = [];
    let index = [];
    let ans = ''
    for (let j = 0; j < cond.length; j++) {

      if (stack.length === 0) {
        stack.push(cond[j])
        index.push(j + 1)
      } else if (stack.length !== 0) {
        if (cond[j] >= stack[stack.length - 1]) {
          while (cond[j] > stack[stack.length - 1]) {
            if (stack.length !== 0) {
              stack.pop()
              index.pop()
            } else {
              stack.push(cond[j])
              index.push(j + 1)
              break
            }
          }
        }
        if (cond[j] < stack[stack.length - 1]) {
          stack.push(cond[j])
          index.push(j + 1)
        }

      }

      if (index.length > 1) {
        ans += index[index.length - 1] - index[index.length - 2] + " "
        console.log(index[index.length - 1] - index[index.length - 2])
      } else {
        ans += index[index.length - 1] + " "
        console.log(index[index.length])
      }
      console.log(index)

    }
    // console.log(ans)
  }

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`2
  7
  3 5 0 9 8`);
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