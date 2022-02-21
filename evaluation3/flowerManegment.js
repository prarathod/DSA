/*
1
5 1
1 0 0 0 1
*/ 

function fm(arr,k){
    let count=0;


    for(let i =0;i<arr.length-1;i++){
        if(i==0 && arr[i]==0 && arr[i+1]==0){
            count++;
            arr[i] = 1;
        }
        if(arr[i]==0 && arr[i-1]==0 && arr[i+1]==0){
           count++;
           arr[i]=1;

        }
        if(i==arr.length-1 && arr[i]==0 && arr[i-1]==0){
            count++;
            arr[i]==0;
        }
    }

    if(count>=k){
        return "Yes"
    }else{
        return "No"
    }
}


function runProgram(input) {
    let ar = input.split("\n");
    for (var i = 2; i < ar.length; i = 2 + i) {
        let arr = ar[i].trim().split(" ").map(Number);
        let k = ar[i-1].trim().split(" ").map(Number)[1];
        console.log(fm(arr,k))
        
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`1
    5 1
    1 0 0 0 1
    5 1
    1 0 0 0 1`);
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