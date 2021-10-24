// 1 print all all elemnet in an array

let arr = [1,2,3,4,5,6,7,8,9,10];

function allElem(arr,index){

    if(arr.length<=index){
        return ;
    }
    console.log(arr[index])
    return allElem(arr,index+1)
}
// allElem(arr,0)


function reverse(arr,len){
    if(len<=0){
        return arr[0];
    }
    console.log(arr[len])
    return reverse(arr,len-1)
}

console.log(reverse(arr,arr.length-1))