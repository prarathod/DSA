let n = 5;
function rec(n, sum){
    if(n<=0){
        console.log(sum);
        return
    }

    sum = n*sum;
    rec(n-1,sum);
}

rec(n,1)