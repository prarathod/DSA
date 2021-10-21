let n = 4,m = 3;

function style(n,m){
    if(n<m){
        return 1;
    }
    if(n===m){
        return 2;
    }

    let vertical = style(n-1,m);

    let horizontal = style(n-m,m);
    return vertical+horizontal;
}

// console.log(style(n,m))




