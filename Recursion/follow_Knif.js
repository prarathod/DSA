let board = 0;

function find(step,i,j){
    if(i<0||i>9 || j<0||j>9){
        return;
    }
    if(step==0){
 
        board+=1;
      
        return console.log("b1=> "+board);
    }
    find(step-1,i-2,j-1);
    find(step-1,i-2,j+1);
    find(step-1,i+2,j-1);
    find(step-1,i+2,j+1);
    find(step-1,i-1,j+2);
    find(step-1,i-1,j-2);
    find(step-1,i+1,j-2);
    find(step-1,i+1,j+2);

}
find(1,0,0)