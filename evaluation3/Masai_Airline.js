function runProgram(input) {
    let a = input.split("\n");
    let check = a[1].trim().split(" ").map(Number);
    let hBag = a[2].trim().split(" ").map(Number);
    for(var i=0;i<check.length;i++){
        if(check[i]<=15 && hBag[i]<=7){
            console.log("Boarding")
        }else{
            console.log("Stop")
        }
        // console.log(check[i],hBag[i]);
    }


}

if (process.env.USERNAME === 'prajw') {
  runProgram(`4
  12 14 15 6
  8 5 7 4`);
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