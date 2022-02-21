function searchAss(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = start + Math.floor(end - start / 2);
        if (arr[mid] == target) {
            return mid;
        }
        if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1
        }
    }
    return -1;
}

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(searchAss(arr,1))

function searchDiss(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        if (arr[mid] < target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}
// let ar = [9,8,7,6,5,4,3,2,1]
// console.log(searchDiss(ar,1));

function search(arr, target) {
    if (arr.length == 1) {
        if (arr[0] == target) {
            return 1;
        } else {
            return -1;
        }
    }
    if (arr[0] < arr[1]) {
        return searchAss(arr, target)
    }
    else {
        return searchDiss(arr, target)
    }
}

let ar1 = [9, 8, 7, 6, 5, 4, 3, 2, 1]
let ar2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(search(ar1,1));
// console.log(search(ar2,6));


function nearest(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] == target) {
            result = mid;
            end = mid - 1;
        }
        if (arr[mid] < target) {
            start = mid + 1;
        }
        if (arr[mid] > target) {
            end = mid - 1;
        }

    }
    return result;
}
// console.log(nearest([1,2,2,2,2,2,2,2],2))



function longest(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] == target) {
            result = mid;
            start = mid + 1;
        }
        if (arr[mid] < target) {
            start = mid + 1;
        }
        if (arr[mid] > target) {
            end = mid - 1;
        }
    }
    return result;
}

// console.log(longest([1,1,1,1,1,1,2,3,4,4,4,6,7,8,9],1))


// find the count
function last(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] == target) {
            result = mid;
            start = mid + 1;
        }
        if (arr[mid] < target) {
            start = mid + 1;
        }
        if (arr[mid] > target) {
            end = mid - 1;
        }
    }
    return result;
}

function first(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] == target) {
            result = mid;
            end = mid - 1;
        }
        if (arr[mid] < target) {
            start = mid + 1;
        }
        if (arr[mid] > target) {
            end = mid - 1;
        }
    }
    return result;
}
function count(arr, target) {
    return last(arr, target) - first(arr, target) + 1;
}
// console.log(count([1,2,3,4,4,4,4,4,4,5,5,5,5,5,6,7,8],4))


// find the number of rotation of an array .

function countRotations(arr, low, high) {
    if (high < low){
        return 0;
    }

    // If there is only one element left
    if (high == low){
        return low;
    }

    let mid = Math.floor(low + (high - low) / 2); 

    // Check if element (mid+1) is minimum element.
    // Consider the cases like {3, 4, 5, 1, 2}
    if (mid < high && arr[mid + 1] < arr[mid]){
        return (mid + 1);
    }
    

    // Check if mid itself is minimum element
    if (mid > low && arr[mid] < arr[mid - 1])
        return mid;

    // Decide whether we need to go to left half or
    // right half
    if (arr[high] > arr[mid])
        return countRotations(arr, low, mid - 1);

    return countRotations(arr, mid + 1, high);
}

// Driver code
// let arr = [15, 18, 2, 3, 6, 12];
// let n = arr.length;
// console.log(countRotations(arr, 0, n - 1));




// floor elemnt in an array using binary search;

function floor(arr,target){
    let start = 0;
    let end = arr.length -1;
    let result = -1;
    while(start<=end){
        let mid = Math.floor(start + ((end-start)/2));
        if(arr[mid]==target){
            return arr[mid];
        }
        if(arr[mid]>target){
            end = mid-1;
        }
        if(arr[mid]<target){
            result = arr[mid];
            start = mid+1;
        }
    }
    return result;
}
// console.log(floor([1,2,2,3,4,6,6,7,8,9,23,34,6546],0.1))



// ceil number 
function ceil(arr,target){
    let start = 0; 
    let end = arr.length-1;
    let result = -1;

    while(start<=end){
        let mid = Math.floor(start+ ((end-start)/2))
        if(arr[mid]==target){
            return mid;
        }
        if(arr[mid]<target){
            start = mid+1;
        }
        if(arr[mid]>target){
            result = mid;
            end = mid-1;
        }
    }
    return result;
}

console.log(ceil([1,2,3,4,5,5,6,6,6,7,8,9],5.1))