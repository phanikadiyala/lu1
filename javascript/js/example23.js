/**
 * Created by pkadiyal on 3/18/14.
 */
$(document).ready(function(){
    var arr = [];
    arr[0] = 1 + Number("2");
    arr[1] = 1 * Number("hello");
    arr[2] = Number([3])  + 4;
    arr[3] = +3;
    arr[4] = !!("hello")
    arr[5] = Boolean ('Hello World');


    console.log(arr.join('\n'));
    console.log(parseInt('22 customers have 32 orders'));
    console.log('.32');
    console.log(parseFloat('.32'));



});
