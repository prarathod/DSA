function evenOdd(arr,i=0,evenSum,oddsum){
    if(i==arr.length){
        let temp = []
        temp.push(evenSum);
        temp.push(oddsum);
        console.log((2*evenSum)+(3*oddsum))
        return;
    }
    if(arr[i]%2==0){
        evenSum+= arr[i];
    }else{
        oddsum+= arr[i];
    }

    return evenOdd(arr,i+1,evenSum,oddsum)
   
}



function runProgram(input) {
    let a = input.split('\n')
    let arr = a[1].trim().split(" ").map(Number);

  evenOdd(arr,0,0,0)
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`5
    1 2 3 4 5`);
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