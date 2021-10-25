let str = 'abc';

function permu(str,temp){

    if(str.length==0){
        let out = ""
        let a = 0;
        while(temp.length>a){
            out+=temp[a]+" ";
            a++
        }
        console.log(out)
    }
    for(var i = 0 ; i<str.length;i++){
        let curr = str[i];
        let newStr = str.substring(0,i)+str.substring(i+1);
        permu(newStr,temp+curr);
    }
}
permu(str,"")