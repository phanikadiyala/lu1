/**
 * Created by pkadiyal on 3/19/14.
 */
$(document).ready(function() {

    console.log(factorial(5));
    function factorial(n){
        if (n<=1){
            return 1;
        } else {
            return n * factorial(n-1);
        }
    }

});
