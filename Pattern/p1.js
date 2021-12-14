/*1. You are given a number n.
2. You've to create a pattern of * and separated by tab as shown in output format.

input :- 4
output:- 
*
* *
* * *
* * * *
*/
function p1(n){
    for(var i = 0; i<=n;i++){
        let output = ""
        for(var j = 0;j<i;j++){
            output+="* "
        }
        console.log(output)
    }
}

p1(4)