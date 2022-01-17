
function runProgram(input) {
    let ar = input.split("\n");
    let arr = ar[1].trim().split(" ").map(Number);
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4  = 0;
    arr.forEach((elm)=>{
        if(elm%5==0){
            c1++;
            // console.log( "c1: ", elm,c1)
        }else if(elm%3==0){
            c2++;
            // console.log( "c2: ", elm , c2)
        }else if(elm%2==0){
            c3++;
            // console.log( "c3: ", elm,c3)
        }else if(elm%5!==0 && elm%3!==0 && elm %2!==0){
            c4++;
            // console.log( "c4: ", elm,c4)
        }
    })
    console.log(`${c1} ${c2} ${c3} ${c4}`)
  
    

 

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`4
  1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20`);
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