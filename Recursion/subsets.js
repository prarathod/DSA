
function Possibilities(arr, index, path) {

    if (index == arr.length) {
        if (path.length > 0) console.log(path.join(" "));
    }
    else {
        Possibilities(arr, index + 1, path);
        path.push(arr[index]);
        Possibilities(arr, index + 1, path);
        path.pop();
    }
    return;
}





function runProgram(input) {
    let arr  = input.split("\n")
    let path = new Array();
    Possibilities(arr[1].trim().split(" "),0,path)
    // console.log(arr)

}

if (process.env.USERNAME === 'prajw') {
  runProgram(`3
  2 2 1`);
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
