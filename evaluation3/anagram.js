function anagram(s1, s2) {
    let obj1 = {};
    let obj2 = {};

    if (s1.length !== s2.length) {
        return "False";
    }
    for (var i = 0; i < s1.length; i++) {
        if (obj1[s1[i]] === undefined) {
            obj1[s1[i]] = 1;
        } else {
            obj1[s1[i]]++;
        }
        if (obj2[s2[i]] === undefined) {
            obj2[s2[i]] = 1;
        } else {
            obj2[s2[i]]++;
        }
    }
    let ob = Object.keys(obj1);
for(var i = 0;i<ob.length;i++){
    if(obj1[ob[i]]!==obj2[ob[i]]){
        return "False";
    }
}



    return "True";
}

function runProgram(input) {
    let a = input.split("\n");
    for (var i = 1; i < a.length; i = 2 + i) {
        let s1 = a[i].trim().split("");
        let s2 = a[i + 1].trim().split("");


        console.log(anagram(s1, s2))
    }


}

if (process.env.USERNAME === 'prajw') {
    runProgram(`2
    abcdabb
    dcababb
    aa
    aaa`);
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