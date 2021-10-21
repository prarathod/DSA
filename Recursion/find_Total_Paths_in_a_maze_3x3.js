// 1st. condtinon move only rght and down


let n = 3;
let m = 3;

function maze(i,j,n,m){
    if(i==n && j==m){
        return 0;
    }
    if(i==n-1 || j==m-1){
        return 1;
    }

    let right = maze(i,j+1,n,m);

    let down = maze(i+1,j,n,m);

    return right+down;
}

// console.log(maze(0,1,n,m))


// 2nd cond move only right and above

function maze2(i,j,n,m){

    if(i==0 || j==m-1){
        return 1;
    }
    if(i<0 && j==m){
        return 0;
    }
    let right = maze2(i,j+1,n,m);
    
    let up = maze2(i-1,j,n,m)

    return right+up;
}
// i ==n-1
// console.log(maze2(1,0,n,m))




//3rd:-  cond 1. move only up and left;

function maze3(i,j,n,m){

    if(j<0 && i<0){
        return 0;
    }
    if(j==0 || i==0){
        return 1;
    }

    let left = maze3(i,j-1,n,m);
    let up = maze3(i-1,j,n,m)

    return left+up
}
// here i = n-1 & j = m-1
console.log(maze3(2,2,n,m))