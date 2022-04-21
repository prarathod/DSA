// let arr = [2 ,7 ,11 ,15],target = 9;

function twoSum (arr,target){
    let start = 0;
    let end = arr.length-1;

    while(start<end){
        if((arr[start]+arr[end])==target){
            return `${start} ${end}`;
        }else if(arr[start]+arr[end]<target){
            start++;
        }else if(arr[start]+arr[end]>target){
            end--;
        }
    }
    return `${-1} ${-1}`;

}



function runProgram(input) {
    let a = input.trim().split("\n");

    for(var i =2;i<a.length;i=2+i){
        let arr = a[i].trim().split(" ").map(Number);
        let target = a[i-1].trim().split(" ").map(Number)[1]
        console.log(twoSum (arr,target))
    }

}

if (process.env.USERNAME === 'prajw') {
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
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