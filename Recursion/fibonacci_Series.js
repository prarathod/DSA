// find the nth fibo element

let num = 5;
let term = 0;
function fibo(n){
    if(n==0||n==1){
        return n;
    }
    
    return fibo(n-1)+fibo(n-2)
}

console.log(fibo(7))