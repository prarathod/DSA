function findPeak (arr){
    if(arr.length < 3) {
       return -1
    }
    function tempFunc(start, end){
       if(start > end) {
          return -1
       }
       const middle = Math.floor((start + end) / 2)
       if(arr[middle] <= arr[middle + 1]) {
          return tempFunc(middle + 1, end)
       }
       if(arr[middle] <= arr[middle - 1]) {
          return tempFunc(start, middle - 1)
       }
       return middle
    }
    return tempFunc(0, arr.length - 1)
 };



function runProgram(input) {
    let inp = input.split("\n");

    for(var i =2;i<inp.length;i=2+i){
        let arr = inp[i].trim().split(" ").map(Number);
      console.log(findPeak(arr));
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
    3
    10 20 11
    5
    1 3 6 5 4`);
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
