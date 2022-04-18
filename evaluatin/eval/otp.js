
let otp = "2345";

function checkOtp(otp){
    if(otp.length ==4){
        let ans = `${true} ${otp} length of otp is ${otp.length}`
        return ans;
    }else {
        let ans = `${false} ${otp} length of otp is ${otp.length}`
        return ans;
    }
}




function runProgram(input) {
    let input1 = input.split("\n")
    for(var i =0;i<input1.length;i++){
        let ot = input1[i].trim();
        console.log(checkOtp(ot));
    }

}

if (process.env.USERNAME === 'prajw') {
    runProgram(`1234
    2354
    32974
    37492
    4341
    3472
    57239
    374952
    3242
    2342
    234`);
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