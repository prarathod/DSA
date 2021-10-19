let num = 5;
// tast to print this number 1 , 2, 3, 4, 5,..
// 2ne print it ....., 5,4,3,2,1


function getCount(n){
    if(n<=0){
        return;
    }
    
    return getCount(n-1),console.log(n)
    
}
console.log(getCount(num))