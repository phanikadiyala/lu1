/**
 * Created by pkadiyal on 3/16/14.
 */
$(document).ready (function(){
   var customer = {
       id:272345557,
       phone:'(408)431-1295',
       email:'fjgf@yahoo.com',
       address:{
           city:'santa clara',
           zip:'95219'
       },
       "last name" : "kadiyala",
       "custom field":'......notes on customer ...'
   };
    console.log(customer.id);
    console.log(customer.address.city);
    console.log(customer['id']);
    console.log(customer['last name']); // can not access with customer.last name


});