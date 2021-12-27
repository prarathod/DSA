
function runProgram(input) {
    let input1 = input.split("\n")
    for(var i = 2 ; i<input1.length;i=2+i){
        let ar = input1[i].trim().split(" ").map(Number);

        let obj = {};
        ar.forEach((elm)=>{
            if(obj[elm] == undefined){
                obj[elm] = 1
            }else{
                obj[elm] = 2
            }
        })
        let Obj1 = Object.entries(obj)
            Obj1.forEach((elm)=>{
                if(elm[1]==1){
                    console.log(elm[0])
                }

            })

    }
   


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`1
    5
    1 2 1 3 4 4 5 2 3`);
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