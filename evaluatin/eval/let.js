function runProgram(input) {
    let a = input.trim().split('\n')
    for(var i = 2 ; i<a.length;i=2+i){
        let ar = a[i].trim().split("").map(Number);
        let arr = [0,0,0,0,0,0,0,0,0,0]
        
        // console.log(ar ,arr)
        for(var j=0;j<ar.length;j++){
            arr[ar[j]]++

        }
        let b =[]
        arr.forEach((elm)=>{
            b.unshift(elm)
        })
        console.log(b.join(" "))
    }
    

}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
    5
    21321
    6
    235452`);
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
