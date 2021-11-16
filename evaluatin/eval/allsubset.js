
function* subsets(array, offset = 0) {
    while (offset < array.length) {
      let first = array[offset++];
      for (let subset of subsets(array, offset)) {
        subset.push(first);
        yield subset;
      }
    }
    yield [];
  }







function runProgram(input) {
    let a = input.trim().split('\n')
    
    for (var i = 1; i < a.length; i = i + 2) {
        let arr = a[i].trim().split(" ").map(Number);
        let k = arr[1]
        
        let count = 0;
        for (let subset of subsets(a[i+1].trim().split(" ").map(Number))) {
            // console.log(subset);
            let sum=0;
            for(var j = 0 ; j<subset.length;j++){
                if(subset[j]%2!=0){
                    sum++;
                }
            }
            if(sum>=k){
                count++;
            }
             
        }
        console.log(count)
    }


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
