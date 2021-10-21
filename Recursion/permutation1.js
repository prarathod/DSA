
function permu(str,temp){
    if(str.length===0){
        console.log(temp)

    }
    for(var i = 0;i<str.length;i++){
        let currentChar = str[i];
        let newStr = str.substring(0,i)+str.substring(i+1);

        permu(newStr,temp+currentChar+" ");
    }
}



function runProgram(input) {
    
    let arr = input.split('\n');
    for(var i = 1;i<arr.length;i++){
        let a = arr[i].trim().split(" ");
        let str = ''
        for(var k = 0;k<a.length;k++){
                str+=a[k]
        }
        permu(str,"");
    }

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`3
  1 2 3`);
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