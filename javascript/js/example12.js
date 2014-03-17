/**
 * Created by pkadiyal on 3/17/14.
 */
$(document).ready(function(){
    var customer = {
        id:32,
        email:'customer@mainnator.com'
    };
   var customerA = Object.create(customer);
    var customerB = {
        id:64,
        email:'customerB@mainnator.com'
    };
    function Customer(_id,_email){
        this.id = _id;
        this.email = _email;
    }
    var customerC = new Customer (128, 'customer@mainnator.com');
    console.log(Object.getPrototypeOf(customerA));
    console.log(Object.getPrototypeOf(customerB));
    console.log(Object.getPrototypeOf(customerC));
    console.log(customer.isPrototypeOf(customerA));
    console.log(Object.isPrototypeOf(customerB));
    console.log(customer.isPrototypeOf(customerC));
});
