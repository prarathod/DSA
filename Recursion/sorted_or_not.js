let arr = [1,2,3,4,5,6]
let arr1 = [1,4,2,3,4,5,6]

function sortOrNot(arr,index){
    if(index>= arr.length){
        return true;
    }
    if(arr[index]<arr[index-1]){
        return false;
    }
    return sortOrNot(arr,index+1);
}

console.log(sortOrNot(arr1,1))