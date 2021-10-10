

function runProgram(input) {
    var arr = input.trim().split("\n")
    let queue = [];
    let stack = [];

    let stackTopElm = -1;
    for (var i = 1; i < arr.length; i++) {
        let cond = arr[i].trim().split(" ").map(Number)

        //    adding in queue

        if (cond[0] == 1) {
            queue.push(cond[1])

        }
        
        // adding in stack

        else if(cond[0]==2){
            stack.push(cond[1])
        }

        // pringing output form queue
        else if( cond[0]==3){
            if(queue.length==0){
                console.log('-1')
            }else{
                console.log(queue[0])
            }
           
        }

        //  printing output from stack
        else if(cond[0]==4){
            if(stack.length==0){
                console.log('-1')
            }else{
                console.log(stack[stack.length-1]);
            }
            
        }

        // removing from queue and adding it from stack
        else if( cond[0]==5){
            stack.push(queue.shift())
            // console.log(queue.shift());
        }
       
    }

}

if (process.env.USERNAME === 'prajw') {
    runProgram(`7
  1 4
  2 3
  1 2
  3
  4
  5
  4`);
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