// print n to 1
const print=(n)=>{
    if(n===1){
        return console.log(1);
    }
    console.log(n);
    if(n>1){
        print(n-1);
    }else{
        print(n+1);
    }
}

// print(-10)


const facto=(n,fact)=>{
    if(n==1){
        return console.log(fact);
    }

    fact=fact*n;
    return facto(n-1,fact);

}

facto(3,1)

