let arr = [1,2,3,4,5];

function special (arr){
let num = 0;
if(arr[0]%2==0){
    arr.forEach((elm)=>{
        if(elm%2==0){
            num++;
        }else{
            num--;
        }
    })
}else{
    arr.forEach((elm)=>{
        if(elm%2!=0){
            num++;
        }else{
            num--;
        }
    })
}
if(num<0 || num>1){
    return "NO";
}

return "YES";
}

console.log(special(arr));