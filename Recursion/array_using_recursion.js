// 1 print all all elemnet in an array

let arr = [1,2,3,4,5,16,7,8,9,10];

function allElem(arr,index){

    if(arr.length<=index){
        return ;
    }
    console.log(arr[index])
    return allElem(arr,index+1)
}
// allElem(arr,0)


function reverse(arr,len){
    if(len<=0){
        return arr[0];
    }
    console.log(arr[len])
    return reverse(arr,len-1)
}

// console.log(reverse(arr,arr.length-1))

let str = "Hello mini";

function reverseStr(str,len,ans){
    if(len<0){
        console.log(ans);
        return;
    }

    ans+= str[len]+" "
    return reverseStr(str,len-1,ans);
}
// reverseStr(str,str.length-1,"")


// find given str is paledrom or not;

let str1 = "annna";

function isPalodrom(str,s,e){

    if(s==e){
        return true;
    }
    if(str[s]!=str[e]){

        return false;
    }
    if(s<e+1){
        return isPalodrom(str,s+1,e-1);
    }
    return true;
}
// console.log(isPalodrom(str1,0,str1.length-1))


// search a element index in an array

function search(arr,len,key){
    if(arr.length==len){
        return "Key Not found";
    }

    if(arr[len]==key){
        return len;
    }

    return search(arr,len+1,key)

}

// console.log(search(arr,0,16))





// largest element in an arrya using recursion

function largestElm(arr , index, elm){
    if(index==arr.length){
        return elm;
    }
    if(arr[index]>elm){
        elm= arr[index];
    }
    return largestElm(arr,index+1,elm);
}
// console.log(largestElm(arr,0,-999900000999))




// sum of all elem in an arr

function sum(arr,i){
if(arr.length==i){
    return;
}
return sum(arr[i]+arr[i+1])
}
