/**
 * Created by pkadiyal on 4/1/14.
 */
window.onload = function(){
    String.prototype.toDoubleDigits = function(){
        if(this.length == 1){
            return '0' + this;
        }else
        {
            return this;
        }
    };
// working with setInterval
    setInterval(function(){
        var date = new Date();
        document.getElementById('timer_bottom').innerHTML = date.getHours().toString().toDoubleDigits() + ':' +
            date.getMinutes().toString().toDoubleDigits()  + ':' +  date.getSeconds().toString().toDoubleDigits()
    },100);
    //working with properties
    var timer = document.getElementById('timer_bottom');
    timer.style.cursor = 'pointer';
    timer.onmouseover = function(){
        if(timer.style.color == 'yellow'){
            timer.style.color = '#7b8489';

        }else{
            timer.style.color == 'yellow';
        }
    };
};