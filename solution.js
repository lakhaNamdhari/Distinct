// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var hash = {}, counter = 0, i;
    
    for ( i = 0; i < A.length; i++ ){
        if ( hash[ A[i] ] === undefined ){
            hash[ A[i] ] = 0;
            counter++;
        }
    }
    
    return counter;
}