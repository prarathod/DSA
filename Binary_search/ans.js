
function fun (n,sum){
    let k=0
    let j = 0;
    if(n==0){
        return;
    }
    k=n%10,j = n%10;
     sum = sum+k;
    fun(j,sum)
    console.log(k);
}

let sum = 0;
fun(2048,sum)

console.log(sum)