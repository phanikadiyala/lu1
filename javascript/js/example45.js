/**
 * Created by pkadiyal on 3/20/14.
 */
$(document).ready(function(){
    var customerArray = [20, 'customer@golive.labs',{id :23, item : 'itemx'}];
    var customerArray2 = new Array(20,'customer@golive.labs',{id :23, item : 'itemx'});

    console.log(typeof customerArray);
    console.log(customerArray instanceof Array);
    console.log(customerArray.length);
    console.log(customerArray[0]);
    customerArray['HelloWorld'] = 100;
    console.log(customerArray.length);
    console.log(customerArray);
    var x = [12,,5];
    var y = Array(100);
    var z = [];
    z[11] = 100;
   // console.log(customerArray['HelloWorld'])
});