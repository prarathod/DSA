function uniq(str) {
    let char = str.split('');
    char.sort();
    for (let i = 0; i < char.length - 1; i++) {
        if (char[i] != char[i + 1]){
            continue;
        }else{
            return "No";
        }  
    }
    return "Yes";
}


function runProgram(input) {
    let str = input.trim();
    console.log(uniq(str))
}

if (process.env.USERNAME === 'prajw') {
    runProgram(`maia`);
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







/*



function uniq(str) {
    let obj = {}
    for (var i = 0; i < str.length; i++) {
        if (obj[str[i]] == undefined) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++
        }
    }
    let count=0;
    let st = Object.values(obj)
    st.forEach((elm) => {
        if(elm > 1){
            count++;
        }
    });
    if(count>0){
        return "No";
    }else{
        return "Yes"
    }
}
function runProgram(input) {
    let str = input.trim();
    console.log(uniq(str))


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`masai`);
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


*/