/**
 * Created by pkadiyal on 3/19/14.
 */
$(document).ready(function(){
    var x  =  {};
    var  y = {id:1};
    var z = x.id || y.id;
    console.log(z);
    x.id = 100;
    z = x.id || y.id;
    console.log(z);
    z = x.id && y.id;
    console.log(z);

});