// let str = 'abcaacab'; 

// return number of a ;

// if a is not in str so return -1;

// str = abcaacab
// target a ; couont =2
// i = 0 = > a 
// i = 1 = > b
// i = 3 = > c 
// i = 4 = > a  
// i = 0 = > a 
// i = 0 = > a 
// i = 0 = > a 

function count(str,tar){
    let target = tar;
    let num =0;

    for(var i = 0 ;i<str.length;i++){
        if(str[i]==target){
            num++;
        }
    }

    if(num==0){
        return -1;
    }else{
        return num;
    }
}

console.log(count("abcaacab",'z'));