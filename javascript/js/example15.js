/**
 * Created by pkadiyal on 3/17/14.
 */
$(document).ready(function(){
    var num1 = new Number(22);
    var num2 = 22;
    console.log(num1 * 100);
    console.log(num2 * 100);

    console.log(num1);
    console.log(num2);
    console.log('typeof num1:'+ typeof num1);
    console.log('typeof num2:'+ typeof num2);
    console.log(1/0);
    console.log(1/-0);
    console.log(1/'32');
    console.log('hello'/2);
    console.log(0/0);

    var num = 5.56789;
    console.log(num.toExponential());
    var num = new Number(13.3714);
    console.log(num.toPrecision());
    console.log(num.toPrecision(2));
    console.log(num.toPrecision(3));
    console.log(num.toPrecision(10));
    console.log(num.toPrecision());
    console.log(15 .toString(16));
    /*The temporary objects created when you access a property of a string, number, or
     boolean are known as wrapper objects, and it may occasionally be necessary to distinguish
     a string value from a String object or a number or boolean value from a Number
     or Boolean object. Usually, however, wrapper objects can be considered an*/
});
