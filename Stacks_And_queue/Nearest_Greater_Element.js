// function runProgram(input) {
//     let arr = input.split("\n")
//     for(var i =2;i<arr.length;i=2+i){
//         let cond = arr[i].trim().split(" ").map(Number);
//         let output =""
//         let stack = [];

//         // 
//         for(var j = 0;j<cond.length;j++){
//         //    console.log(cond[j])
//             if(stack.length==0){
//                 output+= -1+" "
//                 stack.push(cond[j])

//             }else{
//                 console.log(stack)
//                 for(var k= stack.length-1;k>=0;k--){

//                     if(cond[j]<stack[k]){
//                         output+= stack[k]+" "
//                         stack.push(cond[j])
//                         break;
//                     }else if(cond[j]>=stack[k]){
//                         if(stack.length !==0){
//                             stack.pop()
//                         }else{

//                             output+= -1+" "
//                             stack,push(cond[j])

//                             break;
//                         }

//                     }
//                 }

//             }
//         }



//         console.log(output )
//     }


// }

// if (process.env.USERNAME === 'prajw') {
//   runProgram(`1
//   4
//   2 3 9 6 5 0 0 8 5 38 0 6 7 9 54`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }







let input = [2, 3, 5, 3, 7, 5, 8, 6, 8, 95, 95, 6, 36, 23]

// [2, 3, 5, 3, 7, 5, 8, 6, 8, 95, 95, 6, 36, 23]
// -1 -1 -1  5  7 -1 -1  8  8  -1  -1  95 36 95

function nextBigNo(arr) {
    let stack = [];
    let ans = '';
    for (elm of arr) {

        if(stack.length==0){
            ans+='-1'+" "
            stack.unshift(elm)
        }else if(stack.length!==0){

            for(selm of stack){
                
                if(elm<selm){
                    stack.unshift(elm);
                    ans+= selm+" "
                    break;
                }else if(elm>=selm){
                    stack.shift()
                    if(stack.length==0){
                        stack.shift(elm)
                        ans+=-1+" "
                        break;
                    }else{
                        ans+=elm+" "
                        break
                        // stack.unshift(elm)
                    }
                }

                break;
            }

            // break

        }

        
 





    }

    console.log('stack:- ' + stack)
    console.log('ans:- ' + ans)
}





nextBigNo(input)




