let arr = [10,20,30];

function sencond(arr){
arr.sort((a,b)=>{return b-a});
return arr[1];
}
console.log(sencond(arr));