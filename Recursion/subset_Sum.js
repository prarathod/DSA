// given a list arr of n integers, print sums of all subsets in it;
let arr = [5, 4, 3];
let n = arr.length;
let sum ;
function subsetSums(arr, l, r, sum){
     
    // Print current subset
    if (l > r){
       return sum + " ";
    }
   
    // Subset including arr[l]
   return subsetSums(arr, l + 1, r, sum + arr[l]);
                
    // Subset excluding arr[l]
    return subsetSums(arr, l + 1, r, sum);
}


 
console.log(subsetSums(arr, 0, n - 1, 0))
 