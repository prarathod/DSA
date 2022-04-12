
function runProgram(input) {
    let a = input.trim().split("\n");

    let obj = {};
    for (let i = 1; i < a.length; i++) {
        let str = a[i].trim().split(" ");
        obj[str[0]] = Number(str[1]);
    }
    let obj1 = {}
    let ar = Object.keys(obj).sort();
    for(let i =0;i<ar.length;i++){
        obj1[ar[i]]=obj[ar[i]];
    }
 
    let ar2 = Object.entries(obj1).sort((a,b)=>{
        return b[1]-a[1];
    })
    
    let ar3 = [],curVal=0,count =1;
    ar2.forEach((elm)=>{
        if(ar3.length==0){
            ar3.push(1);
            curVal = elm[1];
        }else if(elm[1]==curVal){
            ar3.push(count)
           

        }else if(elm[1]!==curVal){
            count++
            curVal = elm[1];
            ar3.push(count);
        }
    });
 
    
    let tempar = [],tempnum;
    for(var i =0;i<ar3.length;i++){
        if(tempar.length==0){
            tempar.push(1);
            tempnum = ar3[i];
        }else if(tempnum==ar3[i]){
            tempar.push(tempar[tempar.length-1]);
        }else if(tempnum!=ar3[i]){
            tempar.push(i+1);
            tempnum = ar3[i];
        }
    }

    for(var j =0;j<tempar.length;j++){
        console.log(tempar[j]+" "+ar2[j][0])
    }


 
   

}

if (process.env.USERNAME === 'prajw') {
    runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 30
    joy 45`);
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