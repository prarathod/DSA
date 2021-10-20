let str = 'abc';


function subSets(str , n){
    if(n>=str.length){
        return " ";
    }
    console.log(str);
    return subSets(str.substring(1));
}

subSets(str ,0)