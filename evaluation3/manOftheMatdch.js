
function match(arr){
    let ab=0;
    let vk=0;
    arr.unshift(0)
    let count=0;
    for(var i =0;i<arr.length;i++){
        if(count%2==0){
            ab+=arr[i];
            count+=arr[i];
        }else{
            vk+=arr[i];
            count+=arr[i];
        }
        if(i%6==0 && i>0){

            count++;      
        }
    }
    
    // console.log(ab,vk)
    if(ab>vk){
        return "AB de Villiers";
    }else if(vk>ab){
        return "Virat Kohli";
    }else{
        return "Tie";
    }
}

function runProgram(input) {
    let a = input.split("\n");
    for (var i = 2; i < a.length; i = 2 + i) {
        let s1 = a[i].trim().split(" ").map(Number);
        console.log(match(s1))
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`3
    2
    1 2 0 0 1 1 6 6 4 1 6 1
    3
    0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
    1
    0 1 0 1 0 0`);
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