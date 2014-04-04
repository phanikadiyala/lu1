/**
 * Created by pkadiyal on 3/16/14.
 */
$(document).ready(function(){
    var customer = {
        id:48548885548,
        email:'customer@mailnator.com'
    };
    customer.id = 32;
    console.log(customer.id);
    //Object.defineProperty(customer,"id", {configurable:false});
    Object.defineProperty(customer,"id", {writable:true});
    customer.id = 64;
    console.log(customer.id);

    Object.defineProperty(customer,"id", {configurable:false});
    //delete customer.id;
   // console.log(customer);
    console.log(Object.getOwnPropertyDescriptor(customer,'id'));



});