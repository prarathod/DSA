// x = u+ , d-
// y = r+,l-
function runProgram(input) {
    let a = input.split("\n");

    let ar = a[1].trim();
    let x = 0;
    let y =0;


    for(var i =0;i<ar.length;i++){
        if(ar[i]=='u'){
            x++;
        }else if(ar[i]=='d'){
            x--;
        }else if(ar[i]=='r'){
            y++;
        }else if(ar[i]=='l'){
            y--;
        }
    }

    console.log(`${x} ${y}`)






}

if (process.env.USERNAME === 'prajw') {
    runProgram(`4
    lldd`);
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