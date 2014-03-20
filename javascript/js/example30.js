/**
 * Created by pkadiyal on 3/19/14.
 */
$(document).ready(function(){

     var x = {
         val:"hello"
     };

    function changeX(x){
        return x.val.slice(3,5);
    }
    function changeY(x){
        x.val = x.val.slice(3,5);
    }
    console.log(changeX(x));
    changeY(x);

    console.log(x.val);
});
