function longestPalSubstr(S) {
    let len = S.length;
    let highLen = 1;
    let minLen = 0;
    let arr = new Array(len);
    // conSole.log(arr)
    for (let i = 0; i < len; i++) {
        arr[i] = new Array(len);
    }
    for (let i = 0; i < len; ++i) {
        arr[i][i] = true;
    }
    for (let i = 0; i < len - 1; ++i) {
        if (S[i] == S[i + 1]) {
            arr[i][i + 1] = true;
            minLen = i;
            highLen = 2;
        }
    }
    for (let k = 3; k <= len; ++k) {
        for (let i = 0; i < len - k + 1; ++i) {
            let j = i + k - 1;
            if (arr[i + 1][j - 1]
                && S[i] == S[j]) {
                arr[i][j] = true;

                if (k > highLen) {
                    minLen = i;
                    highLen = k;
                }
            }
        }
    }
    // conSole.log(minLen,minLen+highLen)
    S.substring(minLen, minLen + highLen);
    return highLen;
}

let str = "thisracecarisgood";
console.log(longestPalSubstr(str));