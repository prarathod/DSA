// x = u+ , d-
// y = r+,l-
function runProgram(input) {
    let a = input.split("\n");
    let s1 = a[0].trim().split("");
    let s2 = a[1].trim().split("");

    let obj1 = {};
    let obj2 = {};
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1.length != s2.length) {
            console.log("NO");
            count++;
            break;
        }
        if (obj1[s1[i]] == undefined) {
            obj1[s1[i]] = 1;
        } else {
            obj1[s1[i]]++;
        }

        if (obj2[s2[i]] == undefined) {
            obj2[s2[i]] = 1;
        } else {
            obj2[s2[i]]++;
        }

    }


    if (count == 0) {
        for (elm in obj1) {
            if (obj1[elm] !== obj2[elm]) {
                console.log("NO");
                count++;
                break;
            }
        };
    }
    if (count == 0) {
        console.log("YES")
    }







}

if (process.env.USERNAME === 'prajw') {
    runProgram(`amit
    mtia`);
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