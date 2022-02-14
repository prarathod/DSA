
function runProgram(input) {
    let a = input.split("\n");

    for(let i = 2; i<a.length;i=2+i){
       let ar =a[i].trim().split(" ").map(Number);
       let k = a[i-1].trim().split(" ").map(Number)[1];
        let num=0;
        let flag = 0;
        if(k>=1){
            for(var j = 0;j<ar.length;j++){
                if((ar[0]==0 && ar[1]==0)){
                    num++;
                    ar[0] = 1;
                }else if((j==ar.length-1) && ar[j]==0 && ar[j-1]==0){
                    // console.log(j)
                    num++;
                    ar[j] = 1;
                }
                else if(ar[j]==0 && ar[j+1]==0 && ar[j-1]==0){
                    num++;
                    ar[j] = 1;
                  
                }
             

                if(num==k){
                    flag++;
                    console.log("YES");
                    break;
                }
                
                
   
            }
        }
        if(flag==0){
            console.log("NO")
        }
    }
   



}

if (process.env.USERNAME === 'prajw') {
    runProgram(`1
    5 3
    0 0 0 0 0`);
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