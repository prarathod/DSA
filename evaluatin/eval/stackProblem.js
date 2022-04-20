

function check(str){
    let stack = [];
    let obj = {
        "}":"{",
        "]":'[',
        ')':'('
    }
    for(var i =0;i<str.length;i++){
        if(str[i]=='{'||str[i]=="["||str[i]=="("){
            stack.push(str[i]);
        }else if((str[i]=='}'||str[i]=="]"||str[i]==")") && stack.length==0){
            return "not balanced";
        }else{
            if(obj[str[i]] == stack[stack.length-1]){
                stack.pop();
            }
        }
    }
    if(stack.length!=0){
        return "not balanced"
    }else{
        return "balanced"
    }
}




function runProgram(input) {
    let arr = input.split('\n')
    for(var i =1;i<arr.length;i++){
        let str = arr[i].trim();
        console.log(check(str))
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