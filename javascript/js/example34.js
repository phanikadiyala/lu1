/**
 * Created by pkadiyal on 3/19/14.
 */
$(document).ready(function(){
    console.log(returnNothing());
    function returnNothing(){
        var x = 10+20;
        this.id++;
    }
var customer = {
   id:32,
    email:'customer@mailnator.com',
    printDetails:function(){
        return this.id +':' + this.email;
    }
};
console.log(customer.printDetails());

    customer.returnNothing = returnNothing;
    customer.returnNothing();
    console.log(customer.id);
    customer["returnNothing"]();
    console.log(customer.id);

});