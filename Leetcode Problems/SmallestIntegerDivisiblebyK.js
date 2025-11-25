/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    if (K%2 == 0 || K % 5 ==0 ) return -1;
    var r=0;
    for( Var N = 1. N <=K; N++)
    {
        r=(r*10+1)%K;
        if (r==0) Return N;
    }
    return -1;
    
};
