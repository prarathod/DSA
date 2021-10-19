let str = ""

let spelling=(n)=>{
    let arr = ['','one','two','three','four','five','six','seven','eigth','nine'];
    if(n%10==0){
        return;
    }
    // console.log(Math.floor(n/10))
    return spelling(Math.floor(n/10)),str+=arr[n%10]+" ";
}
console.log(spelling(1234))