
// a + b > c a + c > b b + c > a
function runProgram(input) {
    let input1 = input.split("\n")
    for(var i = 2 ; i<input1.length;i=2+i){
        let ar = input1[i].trim().split(" ").map(Number);
        let a = [],b = [],c=[];

        for(var j = 0 ; j<ar.length;j++){
            if(ar[j]==0){
                a.push(ar[j]);
            }else if(ar[j]==1){
                b.push(ar[j]);
            }else if(ar[j]==2){
                c.push(ar[j]);
            }
        }
        if(a.length==0){
            if(b.length==0){
                console.log(c.join(" "));
            }else if(c.length==0){
                console.log(b.join(" "));
            }else{
                console.log(b.join(" ")+" "+c.join(" "));
            }
        }else if(b.length==0){
            if(a.length==0){
                console.log(c.join(" "));
            }else if(c.length==0){
                console.log(a.join(" "));
            }else{
                console.log(a.join(" ")+" "+c.join(" "));
            }
        }else if(c.length==0){
            if(a.length==0){
                console.log(b.join(" "));
            }else if(b.length==0){
                console.log(a.join(" "));
            }else{
                console.log(a.join(" ")+" "+b.join(" "));
            }
        }else{
            console.log(a.join(" ")+" "+b.join(" ")+" "+c.join(" "));
        }

        // console.log(c.join(" "))
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`3
    1
    2
    2
    1 2
    3
    2 0 1
    4
    2 0 2 1`);
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