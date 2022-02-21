function target(arr,start,end,k){
    while(start<=end){
        let mid = Math.floor(start + ((end-start)/2));
        if(arr[mid]==k){
            return mid;
        }else if(arr[mid]>k){
            end = mid-1;
        }else if(arr[mid]<k){
            start = mid+1;
        }
    }
    return -1;
}

function runProgram(input) {
    let inp = input.split('\n');
    let arr = inp[1].trim().split(" ").map(Number);
    let k = inp[0].trim().split(" ").map(Number)[1];
    let start = 0;
    let end = arr.length - 1;
    let output = 0;

    while (start <= end) {
        let mid = Math.floor(start + ((end - start) / 2));
        if ((arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]) || (arr[mid] < arr[mid + 1] && arr[mid - 1] == undefined) || (arr[mid + 1] == undefined && arr[mid] < arr[mid - 1])) {
            output = mid;
            break;
        } else if (arr[mid] > arr[end]) {
            start = mid + 1;
            output = mid;
        } else if (arr[mid] > arr[start]) {
            end = mid - 1;
            output = mid;
        } else {
            end = mid;
            output = mid;
        }
    }
   let a = target(arr,0,output-1,k);
   let b = target(arr,output,arr.length-1,k);
   if(a==-1 && b==-1){
    console.log(-1);
   }else if( a==-1&&b!=-1){
       console.log(b);
   }else{
       console.log(a)
   }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`5 1
    3 4 5 1 2`);
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