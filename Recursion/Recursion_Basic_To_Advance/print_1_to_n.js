function fun(n, num =1){
    console.log(n,num)
    if(num>n){
        console.log("num:- ",n,num)
        return false;
    }
    if(num ==n){
        return true;
    }

    return fun(n,num*10) || fun(n,num*20);
}

console.log(fun(10))