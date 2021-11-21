
function search(arr,min ,max,q){
    if(max>=min){
        mid = min+Math.floor((max-min)/2);

        if(arr[mid]==q){
            return arr[mid]
        }
        if(arr[mid]<q){
            return search(arr,min,mid-1,q)
        }
        if(arr[mid]>q){
            return search(arr,mid+1,max,q)
        }
        
    }
    return "-1";
}





function runProgram(input) {
    let arr = input.trim().split("\n")
    let ar = arr[1].trim().split(" ").map(Number);
        let q = arr[0].trim().split(" ").map(Number);
        console.log(search(ar,0,ar.length-1,q[1]))
    


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`5 10
  50 40 30 20 10
  10
  20
  30
  40
  50
  60
  70
  80
  90
  100`);
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

