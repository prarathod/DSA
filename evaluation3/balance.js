function balance(arr){
    if(arr.length===0){
        return;
    }
    let stack1 = [];
    let obj = {
        ")":"(",
        "]":'[',
        '}':'{'
    }
    arr.forEach((elm)=>{
        if(elm=="(" || elm=="[" || elm =="{"){
            stack1.push(elm)
        }else{
            if(stack1.length!==0){
                if(stack1[stack1.length-1]==obj[elm]){
                    stack1.pop();
                }else{
                    stack1.push(elm)
                }

            }else {
                return "unbalance"
            }
        }
    });
    if(stack1.length==0){
        return 'balance';
    }else{
        return 'unbalance'
    }

    return arr;
}
function runProgram(input) {
  
    let arr = input.trim().split("");
    console.log(balance(arr))


}

if (process.env.USERNAME === 'prajw') {
  runProgram(`((((((((((]))))))))))`);
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