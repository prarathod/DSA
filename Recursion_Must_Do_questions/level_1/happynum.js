var A = 0;B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0;

var obj = {}
function type(arr,i=1){
if(i==arr.length){
   
    return Object.entries(obj).sort().join(",");
}
let a = arr[i].split("");
let char = a[0]
let num;
if(a.length==4){
    num = Number(-a[3])
}else{
    num = Number(a[2])
}

if(obj[char]==undefined){
    obj[char]=num;
}else{
    obj[char] +=num
}
console.log(num)
return type(arr,i+1)
}

console.log(type(["X:-1", "Y:1", "X:-4", "B:3", "X:5"]))

