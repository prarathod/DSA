function callGess(n){
    if(n<=1){
        return 1;
    }

    let single = callGess(n-1);
    let pair = (n-1)*(callGess(n-2));

    return single+pair;
}

console.log(callGess(4))