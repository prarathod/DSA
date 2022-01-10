function stock(arr){
    let stack = [];
    let span = [];
    
    for(var i = 0 ;i<arr.length;i++){
        let k = 0;
        if(stack.length==0){
            
            stack.push(arr[i]);
            k++;
            span.push(k);
            // console.log(arr[i], "span: ", span, "stack :", stack)
        }else{
            
            if(arr[i]>=stack[stack.length-1]){
                // console.log("arr[i]: ",arr[i], "span: ", span, "stack :",stack)
                while(arr[i]>=stack[stack.length-1] && stack.length!==0){
                    k++;
                    stack.pop();
                }k++
                stack.push(arr[i]);
               
                span.push(span[span.length-1]+k);
            }else{
                stack.push(arr[i]);
                k++;
                span.push(k);
            }
        }
    }
    return span.join(" ")
}


function runProgram(input) {
    let ar = input.split("\n");
    for(var i = 2;i<ar.length;i=2+i){
        let arr = ar[i].trim().split(" ").map(Number);
        console.log(stock(arr))
    }
    

 

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`1
  6
  100 60 70 65 80 85`);
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