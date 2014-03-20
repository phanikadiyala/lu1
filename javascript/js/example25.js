/**
 * Created by pkadiyal on 3/18/14.
 */
$(document).ready(function(){
 var arr = [];
    arr[0] = 1 + 2 + "hello";
    arr[1] = "hello" + 1 + 2;
    arr[2] = (false) ? 'first conditional' : (false) ? 'second true' : 'second false';

    console.log(arr.join('\n'));

    var x = 5;
    var y = 7;
    var z = 3;

    k = z + x * y;
    k1 = (z + x) * y;
    console.log(x++);
    console.log(++x);
    console.log(y--);
    console.log(--y);
    console.log(k);
    console.log(k1);
    console.log((2) * ((3) + (4)));



});