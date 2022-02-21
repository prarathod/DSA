var newSet =  new Set();
var aatachiVal = head;
var nextVal = null;
while (aatachiVal != null) {
    var curval = aatachiVal.val;
    if (newSet.has(curval)) {
        nextVal.next = aatachiVal.next;
    } else {
        newSet.add(curval);
        nextVal = aatachiVal;
    }
    aatachiVal = aatachiVal.next;
}






function runProgram(input) {
    let input1 = input.split("\n");
    let k1 = input1[0].trim().split(" ");
    let k = Number(k1[2]);

    let app = input1[1].trim().split(" ").map(Number);
    let home = input1[2].trim().split(" ").map(Number);
    app.sort((a, b) => {
        return a - b;
    })
    home.sort((a, b) => {
        return a - b;
    })

    let count = 0;

    let len = 0;
    if (app.length <= home.lenght) {
        len = app.lenght;
    } else {
        len = home.lenght;
    }

    while (len !== 0){
        if (((app[0] + k) >= home[0] && (app[0] + k) <= home[0]) || ((app[0] - k) <= home[0] && (app[0]) >= home[0])) {
            count++;
            app.shift();
            home.shift();
        }
        else if ((app[0] + k) < home[0]) {
            app.shift();
        } else if ((app[0] + k) > home[0]) {
            home.shift();
        }
    }
    console.log(count)
}




if (process.env.USERNAME === 'prajw') {
    runProgram(`4 3 5
    60 45 80 60
    30 60 75`);
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