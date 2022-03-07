

function difference(arr, k) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (Math.abs(arr[end] - arr[start]) == k) {
            return "Yes";
        }
        if (arr[end] - arr[start] < k) {
            start++;
        } else {
            end--
        }
    }
    return 'No';
}






function runProgram(input) {
    let a = input.split("\n");
   
    for(var i =2;i<a.length;i= 2+i){
        let arr = a[i].trim().split(" ").map(Number);
        let k = a[i-1].trim().split(" ").map(Number)[1];
        console.log(difference(arr,k))
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