
const sum = (arr, k) => {
    let num = arr.length - k;
    let max = 0;
    let min = 0;
    let i = 0;
    let j = arr.length-1;
    while(num>0){
        max+=arr[j];
        min+=arr[i];
        j--;
        i++;
        num--;
    }

    return max-min;;
}

function runProgram(input) {
    let a = input.split("\n");
    for (let k = 2; k < a.length; k = 2 + k) {
        let s1 = a[k - 1].trim().split(" ").map(Number)[1];
        let arr = a[k].trim().split(" ").map(Number);
        let i;
        let j;
        let cen;
        for (i = 0; i < arr.length - 1; i++) {
            cen = i;
            for (j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[cen]) {
                    cen = j;
                }
                let temp = arr[cen];
                arr[cen] = arr[i];
                arr[i] = temp;
            }
        }

        console.log(sum(arr, s1))
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

