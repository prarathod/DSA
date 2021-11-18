let str = "abbbapplecdeafg"

function removeString(str,i=0,out = "", temp="",target = "apple"){
    if(str.length<5){
        return str;
    }
    if(str.length==i){
        return out;
    }

    if(target[0]!=str[i]){
        out+=str[i];
    }
    if(target[0]==str[i]){
        temp+=str[i];
        
    }
}