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

let num = 1236;
let a = num.toString()


function sum(str,index,total){
    if(index>=str.length){
     
        return total;
    }
    total+=Number(str[index]);
    return sum(str,index+1,total)
}
// console.log(sum(a,0,0))

let ar = [1,1,2,3,5,3,6,8,3,7,3,7,9,2,3,4];
const uniq = [...new Set(ar)]
// console.log(uniq)

// 3rd

function countNum(str,count,n,target){
    
    if(n===str.length){
      
        return count;
    }
    if(str[n]==target){
        
        count++;
    }
    return countNum(str,count,n+1,target)
}

// console.log(countNum('12030204454602350',0,0,0))

// 4th

function uptoZero(num,steps){
 
    if(num==0){
        return steps;
    }
    if(num%2==0){
       return uptoZero(num/2,steps+1);
    }else{
      return  uptoZero((num-1)/2,steps+1);
    }

}
// console.log(uptoZero(4 ,0))

// 5th

function checkShort(arr,i){
    if(i==arr.length-1){
        return true;
    }
    if(arr[i]>arr[i+1]){
        return false;
    }
    return checkShort(arr,i+1)
}

// console.log(checkShort([1,2,3,41,5,6,7,8,9],0))

// 6th

function index(arr , target , i){
    if(arr[i]==target){
        return i;
    }
    if(i==arr.length){
        return "Traget not present in array"
    }
    return index(arr,target,i+1)
}
// console.log(index([1,2,3,4,5,6,7,8,9],1,0))

function printStar(n){
    let m = n
    for(var i = 0; i<=n;i++){
        let arr = []
        for(let j = m;j>=1;j--){
            arr.push("*")
        }
        m--;
        console.log(arr.join(" "))
    }
}
// printStar(4)
