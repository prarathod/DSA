let n = 3;

function sumNum(n,sum){
    
    if(n<=0){

        return sum;
    }
    sum+=n;
    return sumNum(n-1,sum)
}

console.log(sumNum(n, 0))
