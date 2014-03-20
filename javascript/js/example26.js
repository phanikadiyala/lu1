/**
 * Created by pkadiyal on 3/19/14.
 */
$(document).ready(function() {
var x = 0/0;
var y = 0/0;
    console.log(x === y );
    console.log('1' == true );
    console.log('0' == false );
    console.log('100' == true );

    /*If the Boolean object has no initial value, or if the passed value is one of the following:

     0
     -0
     null
     ""
     false
     undefined
     NaN
     the object is set to false. For any other value it is set to true (even with the string "false")! */

    console.log(Boolean("100") == true );

});