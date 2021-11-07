let arr = [1,2,3,4,5,6,7,8]

function search(arr,index,target){
    
    if(index==arr.length){
        
        return -1;
    }
    if(arr[index]===target){
       
        return index;
    }
    return search(arr,index+1,target)
}

// console.log(search(arr,0,6))

function search1(arr,target,s,e){
   
    if(s>e){
        
        return -1;
    }
   
    let mid = Math.round(s+((e-s)/2));
    
    if(arr[mid]===target){
     
        return mid;
    }
    if(target<arr[mid]){
        return search(arr,target,s,mid+1);
    }
    return search (arr,target,s+1,e)
}

// console.log(search1(arr,,0,arr.length-1))