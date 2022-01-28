function cure(check,hBag){
    for(var i=0;i<check.length;i++){
        if(check[i]<hBag[i]){
            return "No"
        }
    }
    return "Yes"
}


function runProgram(input) {
    let a = input.split("\n");
    let check = a[1].trim().split(" ").map(Number);
    let hBag = a[2].trim().split(" ").map(Number);
    check.sort((a,b)=>{return a-b;})
    hBag.sort((a,b)=>{return a-b;})
    
    console.log(cure(check,hBag))


}

if (process.env.USERNAME === 'prajw') {
  runProgram(`5
  123 146 454 542 456
  100 328 248 689 200`);
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