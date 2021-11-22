function find(arr, target){
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        let mid  = Math.floor(start+ ((end-start)/2));
        
        if(arr[mid]==target){
            return "YES"

        }
        if(arr[mid]>target){
            start = mid+1;
        }
        if(arr[mid]<target){
            end = mid-1;
        }
    }
    return "NO"
}

function runProgram(input) {
    let arr = input.trim().split("\n");
    let ar = arr[1].trim().split(" ").map(Number);

    console.log(ar)
    for(var i =2;i<arr.length;i++){
        let target = arr[i].trim().split(" ").map(Number);    
        console.log(find(ar,target))
    }

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