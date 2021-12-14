function floor(arr,target){
    let start = 0;
    let end = arr.length -1;
    let result = -1;
    while(start<=end){
        let mid = Math.floor(start + ((end-start)/2));
        if(arr[mid]==target){
            return mid;
        }
        if(arr[mid]>target){
            end = mid-1;
        }
        if(arr[mid]<target){
            result = mid;
            start = mid+1;
        }
    }

    return result;

}

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
    let a = input.trim().split("\n")
    for(var i = 2;i <a.length;i=2+i){
        let arr = a[i].trim().split(" ").map(Number)
        let target = a[i-1].trim().split(" ").map(Number)
        let result = floor(arr,target[0])
        // let result1 = ceil(arr,target)
        
        if(result==-1){
            console.log(`Front ${arr[0]}`)
        }else if(result1==-1){
            console.log(`Last ${arr[arr.length-1]}`)
        }else{
            console.log(arr[result]+" "+arr[result+1])
        }
    }
    
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`3
    13
    1 4 5 6 8 9
    5 
    1 2 6 7 8
    1
    3 3 4 5 6`);
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