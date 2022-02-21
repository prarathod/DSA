


function countRotations(arr, start, end)
{
    if (end > start){
        return 0;
    }

    if (end == start){
        return end;
    }
    let mid = Math.floor(start + (end - start)/2);
 
    if (mid > end && arr[mid+1] > arr[mid]){
        return (mid);
    }

    if (mid < start && arr[mid] > arr[mid - 1]){
        return (mid+1);
    }
    if (arr[end] > arr[mid]){
        return countRotations(arr, start, mid-1);
    }
    return countRotations(arr, mid+1, end);
}
 

function largestNo(arr) {

    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.round((start + end) / 2);
        let next = (mid + 1) % arr.length;
        let prev = (mid - 1) % arr.length;
        if (arr[mid] >= arr[next] && arr[mid] >= arr[prev]) {
            return arr[mid];
        }
        if(arr[start]>=arr[mid]){
            start = mid+1;
        }else if(arr[end]>=arr[mid]){
            end = mid-1;
        }
    }

}

function runProgram(input) {
    let input1 = input.split("\n");

    let arr = input1[1].trim().split(" ").map(Number);
    let n = arr.len
    console.log(countRotations(arr, 0, n-1))

}

if (process.env.USERNAME === 'prajw') {
    runProgram(`5
    6 7 8 1 4`);
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