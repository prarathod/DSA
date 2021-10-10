function runProgram(input) {
    let arr = input.trim().split("\n")
    let output = []
    let club = []

    for (let i = 1; i < arr.length; i++) {
        let cond = arr[i].trim().split(" ")
        let temp = []

        // adding value in temp arr
        if (cond[0] == 'E') {
            temp.push(Number(cond[1]), Number(cond[2]))
        }




        if (cond[0] == 'E') {
            if (club.lastIndexOf(temp[0]) == -1) {
                output.push(temp)
                club.push(temp[0])
            } else {
                
                club.splice((club.lastIndexOf(temp[0])) , 0, temp[0])
                output.splice((club.lastIndexOf(temp)) , 0, temp)
                // console.log(club.lastIndexOf(temp[0]))
                // console.log(club,output)
            }
        }else if(cond[0]=='D'){
            let a = output.shift()
            console.log(a[0]+" "+a[1])
            club.shift();
        }

        


    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`5
  E 1 1
  E 2 1
  E 1 2
  D
  D`);
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