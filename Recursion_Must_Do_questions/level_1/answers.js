// must do questins answers

// 1st Q
const printNum = (n) =>{
    if(n==0){
        return;
    }
    printNum(n-1);
    console.log(n)
}
// printNum(5)



function printnumber(n){
    if(n<0){
        return;
    }
    console.log(n);
    printnumber(n-1);
}
// printnumber(5)

function printEven(n){
    if(n==0){
        return 0;
    }
    if(n%2==0){
        console.log(n)
    }
    printEven(n-1);

}
// printEven(5)

function printOdd(n){
    if(n==0){
        return;
    }
    printOdd(n-1);
    if(n%2!==0){
        console.log(n)
    }
    
}
// printOdd(6)

function factorial(n,fact=1){
    if(n==0){
        return;
    }
    fact = fact*n;
    console.log(fact);
    factorial(n-1,fact);
}
// factorial(5)


function infinate(n){
    if(n==100){
        return ;
    }
    console.log(n);
    infinate(n+1);
}
// infinate(1)

function sumNatural(i,n,sum){
    if(i===n){
        sum+=i;
        console.log(sum)
        return;
    }
    sum+=i;
    sumNatural(i+1,n,sum);
}
// sumNatural(1,5,0);

function multiplication(i,n,multi){
    if(i===n){
        multi = multi*i;
        console.log(multi);
        return;
    }
    multi=multi*i;
    multiplication(i+1,n,multi);
}
// multiplication(1,5,1)

function factorial(n){
    if(n==1){
        return 1;
    }
    return n * factorial(n-1)
}
// console.log(factorial(4))


function fibonacci(n){
    if(n==0||n==1){
        return n;
    }
    return fibonacci(n-1)+ fibonacci(n-2);
}
// console.log(fibonacci(10))






// ******  fibonacci using ittration *********** 
// find 6th fibonacci.
let num1 = 0; 
let num2 = 1;
function fibo(n){
for(var i = 1; i<n;i++){
    let a = 0;
    a = num2
    num2 = num1+num2;
    num1 = a;
}
return num2;
}
// console.log(fibo(10))


function findPower(x,n){
if(x===0){
    return 0;
}
if(n===0){
    return 1;
}
return x = x*findPower(x,n-1);
}
// console.log(findPower(3,3))


function findPower1(x,n){
    if(n===0){
        return 1;
    }
    if(x===0){
        return 0;
    }
    if(n%2===0){
        return findPower1(x,n/2) * findPower1(x,n/2);
    }else{
        return findPower1(x,Math.floor(n/2))*findPower1(x,Math.floor(n/2))*x
    }
}
// console.log(findPower1(2,7))
