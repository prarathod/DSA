// let you want to add 1+2+3.....+n = ?

let total = 0;
let n = 6;
for(var i = 1;i<=n;i++){
    total+=i
}
console.log('total: ',total)

// instead of above we can do it by recursion method

let sum = function(n){

    if(n<=0){
        return 0;
    }
    return n+sum(n-1);
}
console.log(sum(n))





let jaswanth = (n)=>{
    if(n==1|| n ==0){
        return n;
    }
    return factMulti(n-1)+ factMulti(n-2);
}
console.log(factMulti(arr[0]));