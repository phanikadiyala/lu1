/**
 * Created by pkadiyal on 3/19/14.
 */
$(document).ready(function(){

    function multiplier(){
        var result = 1;
        if(Array.isArray(arguments[0])){
            for (var i= 1, len = arguments.length; i < len; i++){
                result = result * arguments[0][1];
            }
            return result;
        }else {
            for (var i= 1, len = arguments.length; i < len; i++){
                result = result * arguments[1];
            }
            return result;
        }

    }

var arr = [1,2,3,4,5];
 var m =   multiplier(arr);
    console.log(m);
    m = multiplier(1,2,3,4,5);
    console.log(m);
    m = multiplier('1','2','3','4','5');
    console.log(m);
});