/**
 * Created by pkadiyal on 3/17/14.
 */
$(document).ready(function(){
    var customername = "john smith";
    //If an empty string ("") is used as the separator, the string is split between each character
    var names = customername.split('');
    console.log("First Name:" + names[0]);
    //array.slice(start,end)
    console.log(customername.slice(0,4));
    console.log(customername.slice(-5));
    console.log(customername.indexOf('h'));
    console.log(customername.lastIndexOf('h'));
    console.log(customername.charAt(5));
    console.log(customername[5]);

});