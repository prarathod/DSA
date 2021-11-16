function getCombinations(array) {

    function fork(i, t) {
        if (i === array.length) {
            result.push(t);
            return;
        }
        fork(i + 1, t.concat([array[i]]));
        fork(i + 1, t);
    }

    var result = [];
    fork(0, []);

    return result;
}

function findOdd(a,oddNum){
    let out = 0;
    let arr = a;
    let len = a.length
    arr.forEach((elm)=>{
        let count = 0;
        elm.forEach((e)=>{
            if(e%2!=0){
                count++;
            }
        })
        if(count>=oddNum){
            if(out < elm.length){
                out = elm.length
            }
            
        }
    })
    console.log(out)
}


function runProgram(input) {
    let a = input.trim().split('\n')

    for(var i = 1 ; i<a.length;i=2+i){
        let arr = a[i].trim().split(" ").map(Number);
        let tempArr = a[i+1].trim().split(" ").map(Number);;
        let oddNum = arr[1];
        findOdd(getCombinations(tempArr),oddNum)
    }

    // for (var i = 1; i <a.length; i = i + 2) {

        
    //     for(var i = 1;i<=arr[0];i++){
    //         tempArr.push(i);
    //     }
    //     console.log(tempArr)
        
    //     findOdd(getCombinations(tempArr),oddNum)
     
    // }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
    4 2
    4 3 2 1
    2 1
    2 3`);
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

