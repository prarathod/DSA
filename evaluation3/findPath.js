
function arrMake(a,b){
let twoDarray = [];

    for(let i = 0;i<a;i++){
        let temp = []
        for(let j = 0;j<b;j++){
            temp.push([i,j]);
        }
        twoDarray.push(temp);
    }
    return twoDarray;
}


function runProgram(input) {
    let a = input.split("\n");
    let num = 0;
    for(var i = 1;i<a.length;){
        let test = a[i].trim().split(" ")[0]
        let toD = arrMake(a[i].trim().split(" ")[0],a[i].trim().split(" ")[1]);
        let temp= [];

        for(var j = i+1;j<=i+Number(test);j++){
            let cas1 = a[j].trim().split("");
            let ith = 0;
            let jth = 0;
            for(var m = 0;m<cas1.length;m++){
                if(cas1[m]=='L'){
                    jth--;
                }else if(cas1[m]=='R'){
                    jth++;
                }else if(cas1[m]=='U'){
                    ith--;
                }else{
                    ith++;
                }
                if(ith<0 || jth<0 || ith>a[i].trim().split(" ")[0] ||a[i].trim().split(" ")[1]){
                    console.log(outt);
                    break;
                }else{
                    if(temp.indexOf(toD[ith][jth])){
                        
                    }
                }
                console.log(cas1[m])
            }
        }
        

        i+=Number(test)+1
    }
    let k = a[0].trim().split(" ").map(Number)[1];


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`1
    3 4
    RRDR
    LLUD
    LLLL`);
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
arrMake(3,4)