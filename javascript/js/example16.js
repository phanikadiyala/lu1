/**
 * Created by pkadiyal on 3/17/14.
 */
$(document).ready(function(){
    var date = new Date();
    var utcStart = new Date(1970,0,1);
    console.log(date);
    console.log(date.toJSON());
    var n = date.getFullYear();
    var n1 = date.getYear();
    console.log(n);
    console.log(n1);
    console.log(date.valueOf());
    console.log(date - utcStart);


});