
function runProgram(input) {
    let arr = input.trim().split("\n");
    for (var i = 2; i < arr.length; i = 3 + i) {
        let ar1 = arr[i].trim().split(" ").map(Number);
        let ar2 = arr[i+1].trim().split(" ").map(Number);
       

        let k = 0,j=ar2.length-1;
        let count = 0;
        while(k<ar1.length && j>=0){
            
            if(ar1[k]==ar2[j]){
                count++;
                k++;
                j--;
            }else if(ar1[k]<ar2[j]){
                k++;
            }else if(ar1[k]>ar2[j]){
                j--;
            }
        }
        console.log(count)
      
      
    }





}

if (process.env.USERNAME === 'prajw') {
    runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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