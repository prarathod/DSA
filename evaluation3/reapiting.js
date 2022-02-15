
function reapint(arr){
    let obj = {};
    let rp = 0;
    arr.forEach((elm)=>{
        if(obj[elm]==undefined){
            obj[elm]= 1;
        }else{
            rp = elm;
        }
    });
    let ob = Object.keys(obj).map(Number);

    let missing = 0;
    for(var i=1;i<=arr.length;i++){
        if(ob.length!=arr.length){
           if(obj[i]==undefined){
                missing = i;
           }
        }
    }
    return `${rp} ${missing}`;
}
function runProgram(input) {
let a = input.split("\n");
for (var i = 2; i < a.length; i = 2 + i) {
    let arr = a[i].trim().split(" ").map(Number);
    console.log(reapint(arr))
}


}

if (process.env.USERNAME === 'prajw') {
runProgram(`3
5
1 2 3 3 4`);
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