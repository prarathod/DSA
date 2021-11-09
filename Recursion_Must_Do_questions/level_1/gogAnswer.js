function sumArr (arr,len ){
    let temp = []
    if(len<=1){
        return temp;
    }


    for(var i = 0;i<len-1;i++){
        temp.push(arr[i]+arr[i+1])
    }
    sumArr(temp,temp.length)
    console.log(temp)
}
let arr = [1,2,3,4,5];
let len = arr.length;
// sumArr(arr,len)




// 2nd

function maxMin(arr,max=-9999,min=99999,i=0){
    if(i==arr.length){
        console.log('max:-',max,', min:- ',min);
        return;
    }
    if(max<arr[i]){
        max = arr[i]
    }
    if(min>arr[i]){
        min = arr[i]
    }
    return maxMin(arr,max,min,i+1);
}

// console.log(maxMin([1, 4, 45, 6, 10, -8]))


// 3rd:- 

function upperCase(str,i=0){
    if(str[i]=="A"||str[i]=="B"||str[i]=="C"||str[i]=="D"||str[i]=="E"||str[i]=="F"||str[i]=="G"||str[i]=="H"||str[i]=="I"||str[i]=="J"||str[i]=="K"||str[i]=="L"||str[i]=="M"||str[i]=="N"||str[i]=="O"||str[i]=="P"||str[i]=="Q"||str[i]=="R"||str[i]=="S"||str[i]=="T"||str[i]=="U"||str[i]=="V"||str[i]=="W"||str[i]=="X"||str[i]=="Y"||str[i]=="Z "){
        return str[i];
    }
    if(str.length==i){
        return -1;
    }
    return upperCase(str,++i)
}
console.log(upperCase("geeksforgees"))
// or

function touppder(str,i=0){
    if(str[i]===str[i].toUpperCase()){
        return str[i];
    }
    if(str.length==i){
        return -1;
    }
    return touppder(str,++i);
}
console.log(touppder("prajwwaL"))