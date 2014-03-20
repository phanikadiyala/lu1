/**
 * Created by pkadiyal on 3/19/14.
 */
$(document).ready(function(){
    console.log(Infinity > 0);
    console.log(Infinity > Infinity);
    console.log(11 > 9);
    console.log(11 > "9");
    console.log("11" > 9);
    console.log((1/0) > (0/0));
    console.log(NaN > 9);
});