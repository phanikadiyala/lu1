/**
 * Created by pkadiyal on 3/17/14.
 */
$(document).ready(function(){
    console.log(false === '');
    console.log(false == '');
     var falsy = [undefined, null,0,-0,NaN,''];

    for (var i=0; i<falsy.length; i++){
        console.log('if' + falsy[i]);
        if(falsy[i]){
            console.log('>> evaluates to True');
        }else{
            console.log('>> evaluates to True');
        }
    }

 var x = 4
    if (x != 5)
   console.log("x value is not 5");



});