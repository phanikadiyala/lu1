/**
 * Created by pkadiyal on 3/19/14.
 */
$(document).ready(function(){
     var x = "hello";
    function changeX(x){
        return x.slice(3,5);
    }

    function changeY(x){
        x = x.slice(3,5);
    }

    console.log(changeX(x));
    changeX(x);

    console.log(x);

});