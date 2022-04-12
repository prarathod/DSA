const charCount = (str)=>{
    let arr = [];
    let priChar='',count=0;

    for(let i =0;i<str.length;i++){
      
        if(priChar==''){
            priChar = str[i];
            count++;
        }else if(priChar==str[i]){
            count++;
        }else if(priChar!=str[i]){
            arr.push(`${priChar}${count}`);
            priChar = str[i];
            count =1;
        }
    }
    arr.push(`${priChar}${count}`);
   return arr.join(" ")
  

}


function runProgram(input) {
    let a = input.trim().split("\n");
    for(let i =2;i<a.length;i=2+i){
        let str = a[i].trim().split("")
        console.log(charCount(str))
    }
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
    5
    aabcc
    5
    aazaa`);
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