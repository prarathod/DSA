function count(arr){
    let char="";
    let count = 0;
    if(arr.length==0){
        return 0;
    }
    arr.forEach((elm)=>{
        if(char != elm){
            count ++;
            char = elm;
        }
    });
    return count;
}


function runProgram(input) {
    let ar = input.split("\n");
    for(var i = 1 ; i<ar.length;i++){
        let arr = ar[i].trim().split("");
        console.log(count(arr))
    }
 

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`2
  aaaaa
  abbbaaz`);
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