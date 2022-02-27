let num =2;
// ()()

function cond(str,n,open,close){
    
    if(str.length==2*n){
        
        return console.log(str);
    }

    if(open<n){
        return cond(str+="(",n,open=open+1,close);
    }
    if(close<open){
        return cond(str+=")",n,open,close=close+1);
    }
}
cond("",2,0,0);