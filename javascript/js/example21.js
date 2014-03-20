/**
 * Created by pkadiyal on 3/18/14.
 */
$(document).ready(function(){
    var x=10;y=10;
    console.log(x === y);
    var a = {x:1};
    var b = {y:1};
    console.log(a === b);

    var c1 = {y:1};
    var c2 = {y:1};

    c3 = c1;
    if (c1 === c3){
        console.log("true");
    }else {
        console.log("false");
    }



});

