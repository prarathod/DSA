
function runProgram(input) {
    let arr = input.trim().split("\n")[1].trim().split(" ").map(Number);
    let i =1;j = arr.length-1;
let lnum= arr[0], rnum = 0;


do{
    if(lnum<rnum){
        lnum+=arr[i];
        i++;
    }else if(rnum<lnum){
        rnum+=arr[j];
        j--;
    }
    if(lnum == rnum){
        break;
    }
    

}while(i<j+1)
if(i==j){
    console.log(i+1)
}else{

    console.log(-1)
}


}

if (process.env.USERNAME === 'prajw') {
  runProgram(`5
  3 3 5 5 1`);
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