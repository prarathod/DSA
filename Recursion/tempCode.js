let n = 9;

function geekSeries(n) {
    let a = n;
    console.log(a)
    if (n == 1) {
        return 1;
    }
    while (a != 1) {
        let b = 0;
        if (a % 2 == 0) {
            b = Math.floor(Math.sqrt(a));
        } else {
            b = Math.floor(Math.sqrt(a) * Math.sqrt(a) * Math.sqrt(a));
        }

        console.log(b);
        a = b;

    }
}
geekSeries(6)