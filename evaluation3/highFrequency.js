function high(arr){
    let obj = {};
    if(arr.length===0){
        return -1;
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
    arr.forEach((elm)=>{
        if(obj[elm]>temp){
            output = elm;
            temp = obj[elm]
            // console.log(elm , obj[elm])
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
    6
    1 4 4 4 5 3`);
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