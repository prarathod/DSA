function diff(arr,k){
    
    for(var i = arr.length-1;i>=1;i--){
        for(var j = i-1 ;j>=0;j--){
            if(arr[i] - arr[j]===k){
              
                return "Yes"
            }
        }
    }
    return "No"


}


function runProgram(input) {
    let ar = input.split("\n");
    for(var i = 2;i<ar.length;i=2+i){
        let arr = ar[i].trim().split(" ").map(Number);
        let ar1 = ar[i-1].trim().split(" ").map(Number);
        let k = ar1[1];
        console.log(diff(arr , k))
    }
    

 

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`2
  5 3
  1 2 3 4 5
  5 8
  1 2 3 4 5 `);
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