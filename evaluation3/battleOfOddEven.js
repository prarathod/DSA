function OddEven(arr){
    let odd = 0;
    let even = 0;
    
    arr.forEach((elm)=>{
        if(elm%2==0){
            even+=elm;
        }else{
            odd+=elm;
        }
    });

    if(odd>even){
        return "Odd"
    }else{
        return "Even"
    }
}


function runProgram(input) {
    let ar = input.split("\n");
    let arr = ar[1].trim().split(" ").map(Number);
    console.log(OddEven(arr))
 

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`4
1 2 3 4`);
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