function balance(str){
    let stack = [];
    for(var i = 0;i<str.length;i++){
        if(str[i]=='('||str[i]=='['||str[i]=='{'){
            stack.push(str[i]);
        }
        
        if(str[i]==')'||str[i]==']'|| str[i]=='}'){
            if(stack.length==0){
                return "unbalanced";
            }else{
                let temp = stack.pop();
                if(str[i]==')'){
                    if(temp=='['||temp=='{'){
                        return 'unbalanced';
                    }
                }
                if(str[i]==']'){
                    if(temp=='('||temp=='{'){
                        return 'unbalanced';
                    }
                }
                if(str[i]=='}'){
                    if(temp=='['||temp=='('){
                        return 'unbalanced';
                    }
                }
            }
        }
        if(stack.length==0){
            return 'balanced'
        }else{
            return 'unbalanced'
        }
    }
}


function runProgram(input) {
  
    let arr = input.trim();
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
