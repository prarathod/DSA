let c=0;
function count(x,y){

    if(y!=1){
        if(x!=1){
            c++;
            count(x/2,y);
        }
        else{
            y=y-1;
            count(1024,y);
        }
    }
}
count(1024,1024)
console.log(c)
