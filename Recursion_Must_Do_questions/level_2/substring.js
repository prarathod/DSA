// var arr = "abcde";
// let ar = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         let bag = "";
//         for (let k = i; k < j; k++) {
//             bag += arr[k]
//         }
//         if(bag.length==2){
//             ar.push(bag)
//         }
//     }
// }
// console.log(ar)


function numTotext(num){
    let arr = 
    num.forEach((elm)=>{
        let str = ''
        if(elm==2){
            str+='abc';
        }else if(elm ==3){
            str+='def';
        }else if(elm==4){
            str+='ghi';
        }else if(elm==5){
            str+='jkl';
        }else if(elm==6){
            str+='mno';
        }else if(elm==7){
            str+='pqrs';
        }else if(elm==8){
            str += 'tuv';
        }else if(elm==9){
            str+='wxyz';
        }
    })
    let ar = [];
    let arr = str;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let temp = "";
            for (let k = i; k < j; k++) {
                temp += arr[k]
            }
            
                ar.push(temp)
            
        }
    }
    return str;
}

console.log(numTotext([2,2]));