
function count(a, n,target) {
    let count = 0;
    var b = [];

    for (var j = 0; j < n; j++) {
        if (b.length == 0) b.push(a[j]);
        else {
            var start = 0,
                end = b.length - 1;
            var pos = 0;

            while (start <= end) {
                var mid = start + parseInt((end - start) / 2);
                if (b[mid] === a[j]) {
                    b.insert(Math.max(0, mid + 1), a[j]);
                    break;
                }
                else if (b[mid] > a[j])
                    pos = end = mid - 1;
                else pos = start = mid + 1;
                if (start > end) {
                    pos = start;
                    b.insert(Math.max(0, pos), a[j]);
                    break;
                }
            }
        }
    }
    for (var i = 0; i < n; i++){
       if(b[i]<target){
           count++
       };
    } 
    return count;
}

Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};





function runProgram(input) {
    let ar = input.trim().split("\n");
    let arr = ar[1].trim().split(" ").map(Number);
    for(var i = 3;i<ar.length;i++){
        let target = ar[i].trim().split(" ").map(Number);
        // count(arr, arr.length-1,target);
        console.log(count(arr, arr.length-1,target))
    }
   


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`5
    1 4 10 5 6
    4
    2
    3
    5
    11`);
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

