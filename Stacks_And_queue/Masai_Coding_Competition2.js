function runProgram(input) {
    let arr = input.split("\n")
    let c1 = []
    let c2 = []
    let c3 = []
    let c4 = []
    let mainC = []

    for (var i = 0; i < arr.length; i++) {
        let cond = arr[i].trim().split(" ")

        // adiing to clubwise
        if (cond[0] === "E") {
            if (cond[1] == 1) {

                if (c1.length == 0) {
                    mainC.push(cond[1]);
                    c1.push([cond[1], cond[2]])
                } else {
                    c1.push([cond[1], cond[2]])
                }


            } else if (cond[1] == '2') {
                if (c2.length == 0) {
                    mainC.push(cond[1]);
                    c2.push([cond[1], cond[2]])
                } else {
                    c2.push([cond[1], cond[2]])
                }
            } else if (cond[1] == 3) {
                if (c3.length == 0) {
                    mainC.push(cond[1]);
                    c3.push([cond[1], cond[2]])
                } else {
                    c3.push([cond[1], cond[2]])
                }
            } else if (cond[1] == 4) {
                if (c4.length == 0) {
                    mainC.push(cond[1]);
                    c4.push([cond[1], cond[2]])
                } else {
                    c4.push([cond[1], cond[2]])
                }
            }
        }
        
        // removing Dequeue in clubs and main 
        else if(cond[0]=="D"){
            if(mainC[0]=='1'){
                if(c1.length==1){
                    mainC.shift()
                    let a = c1.shift()
                    console.log(a[0]+" "+a[1])
                }else {
                    let a = c1.shift()
                    console.log(a[0]+" "+a[1])
                }
            }else if(mainC[0]=='2'){
                if(c2.length==1){
                    mainC.shift()
                    let a = c2.shift()
                    console.log(a[0]+" "+a[1])
                }else {
                    let a = c2.shift()
                    console.log(a[0]+" "+a[1])
                }
            }else if(mainC[0]=='3'){
                if(c3.length==1){
                    mainC.shift()
                    let a = c3.shift()
                    console.log(a[0]+" "+a[1])
                }else {
                    let a = c3.shift()
                    console.log(a[0]+" "+a[1])
                }
            }else if(mainC[0]=='4'){
                if(c4.length==1){
                    mainC.shift()
                    let a = c4.shift()
                    console.log(a[0]+" "+a[1])
                }else {
                    let a = c4.shift()
                    console.log(a[0]+" "+a[1])
                }
            }
        }
    }
//  console.log(mainC)

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