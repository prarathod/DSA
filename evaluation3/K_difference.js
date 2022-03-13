let max = 10000;
let dp = Array.from({ length: max }, (_, i) => 0);
function initDP() {
    for (let i = 0; i < max; i++){
        dp[i] = -1;
    }
}
function func(x) {
    if (x == 0){
        return 0;
    }
    if (dp[x] == -1){
        dp[x] = x + func(Math.floor(x / 2));
    }
    return dp[x];
}
initDP();
console.log(func(8))
