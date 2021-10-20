function milk(n){
   if (n<0){
    return 0;
   }
   if(n===0||n===4){
       return 1;
   }
   return milk(n-4)+milk(n-8)
}
console.log(milk(16))