function high(arr){
    let obj = {};
    if(arr.length===0){
        return;
    }
    arr.forEach((elm)=>{
        if(obj[elm]===undefined){
            obj[elm] = 1;
        }else{
            obj[elm]++;
        }
    })
    // console.log(obj);
    let output = 0;
    let temp = 0;
    let ob = Object.entries(obj)
    console.log(ob)
    ob.forEach((elm)=>{
       if(elm[1]>temp){
           output = elm[0];
           temp = elm[1];
       }
    });
    return output
}

function runProgram(input) {
    let a = input.split("\n");
    for(let i = 2;i<a.length;i=2+i){
        // console.log(a[i])
        let ar  = a[i].trim().split(" ").map(Number);
        console.log(high(ar))
    }

}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
    10
    5 1 4 4 2 2 3 2 4 3`);
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