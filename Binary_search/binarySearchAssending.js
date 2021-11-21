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



function longest(arr,target){
    let start = 0;
    let end = arr.length-1;
    let result = -1;
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid]==target){
            result = mid;
            start = mid+1;
        }
        if(arr[mid]<target){
            start = mid+1;
        }
        if(arr[mid]>target){
            end = mid -1;
        }
    }
    return result;
}

// console.log(longest([1,1,1,1,1,1,2,3,4,4,4,6,7,8,9],1))


// find the count
function last(arr,target){
    let start = 0;
    let end = arr.length-1;
    let result=-1;
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid]==target){
            result = mid;
            start = mid+1;
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

function first(arr,target){
    let start = 0;
    let end = arr.length-1;
    let result = -1;
    while(start <=end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid]==target){
            result = mid;
            end = mid-1;
        }
        if(arr[mid]<target){
            start = mid+1;
        }
        if(arr[mid]>target){
            end= mid-1;
        }
    }
    return result;
}
function count(arr,target){
    return last(arr,target)-first(arr,target)+1;
}
// console.log(count([1,2,3,4,4,4,4,4,4,5,5,5,5,5,6,7,8],4))


// find the number of rotation of an array .

function rotation (arr){
    let count = 0;
    let start = 0;
    let end = arr.length-1;
    console.log("1")
    
    if(arr.length==1){
        console.log("2")
        return 0;
        
    }
    if(arr[start]<=arr[end]){
        console.log("3")
        return 0;
    }
    while (start<=end){
        console.log(arr[start],arr[end])
        let mid = start + Math.floor((end-start)/2);
        if((arr[mid]<(arr[(mid+1)%arr.length]))&& arr[mid]<arr[mid+arr.length-1]%arr.length){
            count = mid;
            console.log("1")
        }
        if(arr[start]<=arr[mid]){
            start = mid+1;
            console.log("5")
        }
        if(arr[mid]<=arr[end]){
            end = mid-1;
            console.log("6")
        }
    }
    return count;
}

console.log(rotation([11,12,13,14,15,16,16,2,3,4]))