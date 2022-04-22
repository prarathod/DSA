function findMin(arr) {
    let start =0,end= arr.length-1;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] == arr[end])
            end--;
        else if (arr[mid] > arr[end])
            start = mid + 1;
        else
            end = mid;
    }
    return arr[end];
}




function runProgram(input) {
    let arr = input.trim().split("\n")[1].split(" ").map(Number);
    console.log(findMin(arr))

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`10
  4 6 7 9 10 -1 0 1 2 3`);
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