/*

Geek created a random series and given a name geek-onacci series. Given four integers A, B, C, N. A, B, C represents the first three numbers of geek-onacci series. Find the Nth number of the series. The nth number of geek-onacci series is a sum of the last three numbers (summation of N-1th, N-2th, and N-3th geek-onacci numbers)

Input:
1. The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.
2. The first line of each test case contains four space-separated integers A, B, C, and N.

Output: For each test case, print Nth geek-onacci number

Constraints:
1. 1 <= T <= 3
2. 1 <= A, B, C <= 100
3. 4 <= N <= 10

Example:
Input:
3
1 3 2 4
1 3 2 5
1 3 2 6

Output:
6
11

*/


function series(n){
    if(n==1||n==2||n==3){

        return n;
    }
   
    return series(n-1)+series(n-2)+series(n-3);

}

console.log(series(6))


function GreekSeries(n){
    // console.log(n)
    if(n==1){
      return 1;
    }
    if(n==2){
      return 2;
    }
    if(n==3){
      return 3
    }
  
    let a = GreekSeries(n-1)
    let b = GreekSeries(n-2)
    let c = GreekSeries(n-3);
    return a+b+c
  }
console.log(GreekSeries(6))

