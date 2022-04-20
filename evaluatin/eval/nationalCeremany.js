function nationCeremany(arr){
    let ar1 = [],ar2=[],ar3=[];

    arr.forEach(element => {
        if(element==0){
            ar1.push(element);
        }else if(element==1){
            ar2.push(element);
        }else{
            ar3.push(element);
        }
    });
    let output;
    if(ar1.length!=0 && ar2.length==0&& ar3.length==0){
        output = ar1.join(" ");
    }else if(ar1.length==0 && ar2.length!=0&& ar3.length==0){
        output = ar2.join(" ");
    }else if(ar1.length==0 && ar2.length==0&& ar3.length!=0){
        output = ar3.join(" ");
    }else if(ar1.length!=0 && ar2.length!=0&& ar3.length==0){
        output = ar1.join(" ")+" "+ar2.join(" ");
    }else if(ar1.length!=0 && ar2.length==0&& ar3.length!=0){
        output = ar1.join(" ")+" "+ar3.join(" ");
    }else if(ar1.length==0 && ar2.length!=0&& ar3.length!=0){
        output = ar2.join(" ")+" "+ar2.join(" ");
    }else{
        output = ar1.join(" ")+" "+ar2.join(" ")+" "+ar3.join(" ");
    }
    return output;
}

function runProgram(input) {
    let arr = input.split('\n')
    for(var i =2;i<arr.length;i=2+i){
        let num = arr[i].trim().split(" ").map(Number);

        console.log(nationCeremany(num))
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`3
    1
    2
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


// [1] []  []
// []  [1] []
// []  []  [1]
// [1] [1] []
// [1] []  [1]
// []  [1] [1]
// [1] [1] [1]




