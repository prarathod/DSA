// let ar = [4,5,7, 9 ,1 ,2,3];

function check(arr){
    let start = 0,end=arr.length-1;

while(start<=end){
    let mid = Math.floor(start + (end-start)/2);
    if(arr[mid]<=arr[mid+1] && arr[mid]<arr[mid-1]){
        return mid;
    }else if(arr[mid]>=arr[end]){
        start = mid+1;
    }else if(arr[mid]>=arr[start]){
        end = mid-1;
    }
}
}



function runProgram(input) {
    let arr = input.trim().split("\n");
    let ar = arr[1].split(" ").map(Number);
    let mid = check(ar);

    if(mid>0 && ar[mid]<=ar.length && ar[mid-1]>=ar[0]){
        console.log("YES")
    }else{
        console.log("NO")
    }

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`6
  3 4 7 9 1 2`);
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