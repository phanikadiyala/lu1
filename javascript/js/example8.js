/**
 * Created by pkadiyal on 3/17/14.
 */
$(document).ready(function(){
    var customer = {
        id:32,
        email:'customer@mailnator.com'
    };
   var customerA = Object.create(customer,{
       gender:{
           value:'male',
           writable:true,
           enumerable:true,
           configurable:false,
       }
   });
console.log(customerA);


});