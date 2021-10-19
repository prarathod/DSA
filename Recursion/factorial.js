let a = 5;
var factorial = 1;
function fact(n){
    if(n==1){
        return factorial;
    }
    factorial = factorial*n
    return fact(n-1);
}
console.log(fact(a))