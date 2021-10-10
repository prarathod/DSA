function isBalence(str){
  let stack =[];
  let obj = {
    '(':')',
    '[':']',
    '{':'}'
  }
 
  
  for(var i = 0 ; i<str.length;i++){
    if(str[i]==='('||str[i]==='['||str[i]==='{'){
      stack.push(str[i])
    }else if(str[i]===')'||str[i]===']'|| str[i]==='}'){
      if(stack.length!==0){
        
        let a = stack[stack.length-1];
        if(obj[a]== str[i]){
          stack.pop();
        }else{
          return 'not balanced';
          break;
        }
        

      }else{
        return 'not balanced';
        break;
      }
      
    }

  }
  if(stack.length==0){
    return 'balanced';
  }else{
    return 'not balanced'
  }
}



function runProgram(input) {
  let arr = input.split('\n');


  for (var i = 1; i < arr.length; i++) {
    let stack = []
    let cond = arr[i].trim().split("")

    console.log(isBalence(cond))
  }

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`3
  {([])}
  ()
  ([]`);
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