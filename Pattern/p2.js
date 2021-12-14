/*
1. You are given a number n.
2. You've to create a pattern of * and separated by tab as shown in output format.


Sample Input : 5

output :-
*	*	*	*	*	
*	*	*	*	
*	*	*	
*	*	
*

*/

function p2(n){
    for(var i = 0;i<=n;i++){
        let output = ""
        for(var j =i;j<n;j++){
            output+="* "
        }
        console.log(output)
    }
}
p2(5)