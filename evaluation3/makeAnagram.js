



let arr = [0,0,0,0,1,0]
let putput = 0;
for(let i =0;i<arr.length;){
    if(arr[i+2]==0){
        i+=2;
        putput++;
    }else{
        i++;
        putput++;
    }
}

console.log(putput - 1);

