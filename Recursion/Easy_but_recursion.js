function sum (arr , n){
    if(n<=0){
        return 0;
    }

    return (sum(arr,n-1)+arr[n-1]);
}

// function findSum(A, N) {
//     if (N <= 0)
//         return 0;
//     return (findSum(A, N - 1) + A[N - 1]);
// }


function runProgram(input) {
   let arr = input.split('\n');
   for(var i = 2;i<arr.length;i=2+i){
    let a = arr[i].trim().split(' ').map(Number);
    console.log(sum(a,a.length))
   }

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`3
  5
  6 3 8 2 -4
  5
  -10 -7 10 2 -2
  5
  -4 -5 6 -3 9`);
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