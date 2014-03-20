/**
 * Created by pkadiyal on 3/19/14.
 */
$(document).ready(function(){
    var customer = {
        id:32,
        email:'customer@mailnator.com'
    };
    var order1 = {
        id:111,
        item:'itemx'
    };
    var order2 = {
        id:112,
        item:'itemy'
    };
    var order3 = {
        id:113,
        item:'itemy'
    };
    console.log(customer);
    function addOrder(customer){
        if(!customer.orders){
            customer.orders = [];
        }
        for (var i= 1, len = arguments.length; i < len; i++){
            arguments[0].orders.push(arguments[1]);
        }
        console.log(customer);
    }
 addOrder(customer,order1,order2,order3);
    console.log(customer);
});