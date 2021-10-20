
let powerVal = 1;
function power(n,p){

    if(p==0){
        return;
    }
    powerVal = powerVal*n;
    return power(n,p-1),powerVal;
}

console.log(power(3,3))