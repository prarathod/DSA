// p = 1, f = 1;
// function e(x, n)
// {
//     var r;
 
//     // Termination condition
//     if (n == 0)
//         return 1;
 
//     // Recursive call
//     r = e(x, n - 1);
 
//     // Update the power of x
//     p = p * x;
 
//     // Factorial
//     f = f * n;
 
//     return (r + p / f);
// }


function runProgram(input) {
    let arr = input.trim().split(" ").map(Number);
    var power = 1,factorial = 1;



    function ePowerOFX(x,n){
        if(n<=0){
            return 1;
        }
        var recur = ePowerOFX(x,n-1);
        power = power*x;
        factorial = factorial*n;
        return(recur+power/factorial)
    }
    let b = ePowerOFX(arr[0],arr[1])
    let c = b.toString().split("")
    var ans = ''
// console.log(c.indexOf('.'))
    // for(var i = 0;i<a)
    if(c.indexOf('.')==-1){
        ans = b+'.0000'
    }else{
        for(var i = 0;i<c.indexOf('.')+5;i++){
            // console.log(c[i])
            ans+=c[i];
        }
    }
    console.log(ans)
}

if (process.env.USERNAME === 'prajw') {
  runProgram(`2 8`);
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