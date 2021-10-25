let board = 0;

function find(step,i,j){
    if(i<0||i>9 || j<0||j>9){
        return;
    }
    if(step<=0){
 
        board+=1;
      
        return ;
    }
    find(step-1,i-2,j-1);
    find(step-1,i-2,j+1);
    find(step-1,i+2,j-1);
    find(step-1,i+2,j+1);
    find(step-1,i-1,j+2);
    find(step-1,i-1,j-2);
    find(step-1,i+1,j-2);
    find(step-1,i+1,j+2);
    console.log(board);
}
// find(2,0,0)


function runProgram(input) {
  let arr = input.trim().split(" ").map(Number)
 find(arr[2],arr[0],arr[1]);

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`1 1 2`);
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