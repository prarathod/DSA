
function evenorodd(arr,val){
    let even ='';
    let odd = '';
    arr.forEach((elm)=>{
        if(elm%2==0){
            even+=elm+" ";
        }else{
            odd+=elm+" ";
        }
    });
    if(val==1){
        return even+odd;
    }else{
        return odd+even;
    }
 
}

function runProgram(input) {
    let input1 = input.split("\n");
    for(var i =2;i<input1.length;i=3+i){
       let arr = input1[i].trim().split(" ").map(Number);
       let num = Number(input1[i+1])
       console.log(evenorodd(arr,num))
    }
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
    5
    1 2 3 4 5
    1
    5
    1 2 3 4 5
    2`);
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