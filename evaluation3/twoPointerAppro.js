function close (arr, k) {
    arr.sort((a, b) => {
        return a-b;
    });
    let output = arr[0] + arr[1] + arr[arr.length- 1];
    for (let i = 0; i < arr.length - 2; i++) {
        let j = i + 1;
        let k = arr.length - 1;
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum <= k) {
                j++;
            } else {
                k--;
            }
            if (Math.abs(output - k) > Math.abs(sum - k)) {
                output = sum;
            }
        }
    }
    return output;
};



function runProgram(input) {
    let a = input.split("\n")
    for(var i  = 2;i<a.length;i=2+i){
        let k = a[i-1].trim().split(" ").map(Number)[1]
        let arr = a[i].trim().split(" ").map(Number)
     console.log(close(arr , k))
    }



}

if (process.env.USERNAME === 'prajw') {
  runProgram(`2
  4 1
  -1 2 1 -4
  3 1
  0 0 0`);
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