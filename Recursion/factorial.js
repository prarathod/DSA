let a = 4;
var factorial = 2;
function fact(n){
    if(n==1){
        return factorial;
    }
    factorial = factorial*n
    return fact(n-1);
}
console.log(fact(a))