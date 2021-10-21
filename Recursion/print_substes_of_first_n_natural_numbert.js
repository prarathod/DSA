let n = 3;
let eArr= [];

function findSubsets(n,eArr){
    if(n==0){
        console.log(eArr)
        return;
    }

  

    // add hua
    eArr.push(n);
    findSubsets(n-1,eArr);

    // add nahi hua
    eArr.pop();
    findSubsets(n-1,eArr)
  
}
findSubsets(n,eArr)