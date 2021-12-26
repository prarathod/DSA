function runProgram(input) {
    var arr = input.split("\n");
    for(var i = 2 ; i<arr.length;i=2+i){
        let ar = arr[i].trim().split(" ").map(Number);
        let count1 = 0;
        let preNum;
        let count = 0;
        for(var j = 0 ; j<ar.length;j++){
            if(preNum <=ar[j]){
                preNum = ar[j];
                count1++;
            }else{
                preNum = ar[j];

            }
            if(count1>count){
                count = count1
            }

        }
        console.log(count)
    }
    // console.log(arr)
    

    
    
    }
    
    if (process.env.USERNAME === "prajw") {
      runProgram(`2
      2
      1 1
      6
      1 2 1 2 3 1`);
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