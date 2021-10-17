let n = 19
var str = "";
function printN(n){
    if(n===0){
        return str;
    }

    str = n+' ' +str;
    return printN(n-1)

}
console.log(printN(n))