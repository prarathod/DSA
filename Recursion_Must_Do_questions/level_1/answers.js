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
infinate(1)