function searchAss(arr,target){
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        let mid = start + Math.floor(end-start/2);
        if(arr[mid]==target){
            return mid;
        }
        if(arr[mid]<target){
            start = mid+1;
        }else{
            end = mid-1
        }
    }
    return -1;
}

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(searchAss(arr,1))

function searchDiss(arr,target){
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid]==target){
            return mid;
        }
        if(arr[mid]<target){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return -1;
}
// let ar = [9,8,7,6,5,4,3,2,1]
// console.log(searchDiss(ar,1));

function search(arr,target){
    if(arr.length==1){
        if(arr[0]==target){
            return 1;
        }else{
            return -1;
        }
    }
    if(arr[0]<arr[1]){
       return  searchAss(arr,target)
    }
    else{
        return searchDiss(arr,target)
    }
}

let ar1 = [9,8,7,6,5,4,3,2,1]
let ar2 = [1,2,3,4,5,6,7,8,9]
// console.log(search(ar1,1));
// console.log(search(ar2,6));


function nearest(arr, target){
    let start = 0;
    let end = arr.length-1;
    let result = -1;
    while(start<=end){
        let mid = start + Math.floor((end-start )/2);
        if(arr[mid]==target){
            result = mid;
            end = mid-1;
        }
        if(arr[mid]<target){
            start = mid+1;
        }
        if(arr[mid]>target){
            end = mid-1;
        }

    }
    return result;
}
// console.log(nearest([1,2,2,2,2,2,2,2],2))
