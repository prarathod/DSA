let string = 'madam';

function paledrom(string) {
    let obj = {};
    for(let i = 0;i<string.length;i++){
        if(obj[string[i]]===undefined){
            obj[string[i]]=1;
        }else{
            obj[string[i]]++;
        }
    }
    let temp = 0;
    let arr = Object.values(obj);
    if(string.length%2==0){
        arr.forEach((elm)=>{
            if(elm%2!==0){
               return false;
            }
        });

    }else{
       
        
        arr.forEach((elm)=>{
            
            if(elm%2!==0){
                temp++;
            }
        })
    }
    if(temp>=2){
        return false;
    }else{
        return true;
    }

};









function runProgram(input) {
    let ar = input.split("\n");
    for(var i = 2;i<ar.length;i=2+i){
        let arr = ar[i].trim();
        console.log(paledrom(arr))
    }
  

  
    

 

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`2
  6
  aabbcc
  5
  aabcd`);
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