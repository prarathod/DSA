function steps(n){
    if(n<=0){
        return 0;

    }
    if(n===1){
        return 1;
    }
    return steps(n-3)+steps(n-2)+steps(n-1);
}
console.log(steps(5))