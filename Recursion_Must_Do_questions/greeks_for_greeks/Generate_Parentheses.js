/*

Given an integer N representing the number of pairs of parentheses, the task is to generate all combinations of well-formed(balanced) parentheses.


Example 1:

Input:
N = 3
Output:
((()))
(()())
(())()
()(())
()()()
Example 2:
Input:
N = 1
Output:
()

Expected Time Complexity: O(2N * N).
Expected Auxiliary Space: O(2*N*X), X = Number of valid Parenthesis.

Constraints:
1 ≤ N ≤ 12

*/



function _printParenthesis(str, pos, n, open, close) {
    if (close == n) {
        count++
        return console.log(str.join(""));
    } else {
        if (open > close) {
            str[pos] = ')';
            _printParenthesis(str, pos + 1, n, open, close + 1);
        }
        if (open < n) {
            str[pos] = '(';
            _printParenthesis(str, pos + 1, n, open + 1, close);
        }
    }
}

// Wrapper over _printParenthesis()
function printParenthesis(str, n) {
    if (n > 0)
        _printParenthesis(str, 0, n, 0, 0);
    return;[]
}


// Driver program
var n = 5;
var str = new Array(2 * n);
// printParenthesis(str, n);


