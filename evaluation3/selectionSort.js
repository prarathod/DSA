
function change(arr, mid, i) {
    var temp = arr[mid];
    arr[mid] = arr[i];
    arr[i] = temp;
}
const sum=(arr,k)=>{
    let n = arr.length-1;
    let max = 0;
    let min = 0;
    for(var i = 0;i<k;i++){
        min+=arr[i];
        max+=arr[n];
        n--;
    }
    return max-min;
}
function runProgram(input) {
    let a = input.split("\n");
    for (let k = 2; k < a.length; k = 2 + k) {
        let s1 = a[k - 1].trim().split(" ").map(Number)[1];
        let arr = a[k].trim().split(" ").map(Number);
        let i;
        let j;
        let mid;
        for (i = 0; i < arr.length - 1; i++) {
            mid = i;
            for (j = i + 1; j < arr.length; j++)
                if (arr[j] < arr[mid]) {
                    mid = j;
                }
            change(arr, mid, i);
        }

        console.log(sum(arr,s1))
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`1
    5 1
    1 2 3 4 5`);
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

