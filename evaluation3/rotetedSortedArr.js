function value(arr,price){
    
    let count = 0;
    let idx = arr.length-1;
    let valet = 0;
    while(price!=0){
        console.log(price,count)
        if(arr[idx]<=price){
            valet += arr[idx];
            price-=arr[idx];
        };
        if(arr[idx]>price){
            idx--;
        };
        count++;
    };
   
 

}

value([1,5,7],11)