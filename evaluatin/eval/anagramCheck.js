function runProgram(input) {
    let inp = input.split("\n");
    let str1 = inp[0].trim();
    let str2 = inp[1].trim();
    
    let obj1 = {},obj2 ={};

    for(var i =0;i<str1.length;i++){
        if(obj1[str1[i]]==undefined){
            obj1[str1[i]]=1;
        }else{
            obj1[str1[i]]++;
        }
    }
    
    for(var i =0;i<str2.length;i++){
        if(obj2[str2[i]]==undefined){
            obj2[str2[i]]=1;
        }else{
            obj2[str2[i]]++;
        }
    }
    let output = 0;
    for(var i =0;i<str1.length;i++){
        if(obj1[str1[i]]!==obj2[str1[i]]){
            output++;
            break;
        }
    }
    if(output==0){
        console.log("True");
    }else{
        console.log("False");
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`anagram
    nag a ram`);
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