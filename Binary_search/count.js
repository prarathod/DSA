// 10
// 0 1 0 1 1 1 0 2 2 0 

function count(arr){
    let zero = 0;
    let one = 0;
    let two = 0;
    for(var i = 0 ; i<arr.length;i++){
        // console.log(arr[i])
        if(arr[i]==0){
            zero++;
        }else if(arr[i]==1){
            one++;
        }else if(arr[i]==2){
            two++
        }
    }
    return `${zero} ${one} ${two}`
}




function runProgram(input) {
    let a = input.trim().split("\n")

    let arr = a[1].trim().split(" ").map(Number);
    console.log(count(arr))
  
    
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`3
    0 1 0 1 1 1 0 2 2 0`);
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