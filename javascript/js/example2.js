/**
 * Created by pkadiyal on 3/16/14.
 */
$(document).ready(function(){
    console.log(typeof 32);
    console.log(typeof "This is string");
    console.log(typeof function(){});
    console.log(typeof undefined);
    console.log(typeof null);
    console.log(typeof true);

    //as variables
    var a = 32, b= "This is a String", c = function(){},d = undefined, e=null, f=false, g = NaN, h = 3.14;
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
    console.log(typeof e);
    console.log(typeof f);
    console.log(typeof g);
    console.log(typeof h);


});