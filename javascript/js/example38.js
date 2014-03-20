/**
 * Created by pkadiyal on 3/19/14.
 */
$(document).ready(function(){
    function operate(operator,operandx,operandy){
        return operator(operandx,operandy)
    }
    var operators_array = [];
    operators_array[0] = function add(x,y){
        return x + y;
    }
    operators_array[1] = function subtract(x,y){
        return x - y;
    }
    operators_array[2] = function multiply(x,y){
        return x * y;
    }
    operators_array[3] = function divide(x,y){
        return x / y;
    }
    var m = 100;
    var n = 10;
    var results = [];

    for (var i= 1, len = arguments.length; i < len; i++){
        results[i] = operate(operators_array[i],m,n);

    }
    console.log(results.join('\n'));
});