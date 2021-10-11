// Given a string, find the first non-repeating character in it and returen it's index, if it donesn't exist , return -1;
// input leetcode;

function firstUniq(str){
    let charPair={};

    for(var i = 0; i<str.length;i++){
        let char = str[i]
        charPair[char] = charPair[char]+1 || 1;
    }
    for(var i = 0 ; i<str.length;i++){
        let char = str[i];
        if(charPair[char]==1){
            return i
        }
    }
    return -1;
}
function runProgram(input) {
    console.log(firstUniq(input))

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`TuesdayaTu`);
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