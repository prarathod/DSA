function ceil(arr,target){
    let start = 0; 
    let end = arr.length-1;
    let result = -1;

    while(start<=end){
        let mid = Math.floor(start+ ((end-start)/2))
        if(arr[mid]==target){
            return mid;
        }
        if(arr[mid]<target){
            start = mid+1;
        }
        if(arr[mid]>target){
            result = mid;
            end = mid-1;
        }
    }
    return result;
}



function runProgram(input) {

    let ar = input.split("\n");

    let arr = ar[1].trim().split(' ').map(Number);
    target = ar[0].trim().split(' ').map(Number)[1];
    console.log(ceil(arr, target))

}

if (process.env.USERNAME === 'prajw') {
    runProgram(`10 4
    0 2 4 4 5 5 7 7 9 10`);
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