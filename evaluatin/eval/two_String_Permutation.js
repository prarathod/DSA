const checkStr = (str1,str2)=>{
    if(str1.length!=str2.length){
        return "No";
    }
    let obj1 = {};
    let obj2 = {};
    for(let i =0;i<str1.length;i++){
        if(obj1[str1[i]]==undefined){
            obj1[str1[i]]=1;
        }else{
            obj1[str1[i]]++;
        }

        if(obj2[str2[i]]==undefined){
            obj2[str2[i]]=1;
        }else{
            obj2[str2[i]]++;
        }
    }
    for(let i =0;i<str1.length;i++){
        if(obj1[str1[i]]!==obj2[str1[i]]){
            return "No"
        }
    }
    
    return "Yes"
}
function runProgram(input) {
    let a = input.trim().split("\n");
    let str1 = a[0].trim();
    let str2 = a[1].trim();

   
    console.log(checkStr(str1,str2))


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`a
    z`);
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