function printJuggler(n) {
    let a = n;

    // print the first term
    console.log(a + " ");

    // calculate terms until last term is not 1
    while (a != 1) {
        let b = 0;

        // Check if previous term is even or odd
        if (a % 2 == 0){
            b = Math.floor(Math.sqrt(a));
        }  else {
            b = Math.floor(Math.sqrt(a) *Math.sqrt(a) * Math.sqrt(a));
        }

        console.log(b + " ");
        a = b;
    }
}

// printJuggler(9)


function jun(n){
    let a = n;
    console.log(a)

    while(a!=1){
        let  b = 0;

        if (a % 2 == 0){
            b = Math.floor(Math.sqrt(a));
        }  else {
            b = Math.floor(Math.sqrt(a) *Math.sqrt(a) * Math.sqrt(a));
        }
        console.log(b)
        a = b;

    }
}
jun(9)