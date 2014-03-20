/**
 * Created by pkadiyal on 3/20/14.
 */
$(document).ready(function(){
    var callback = function (id,email){
        console.log('Email of id:' + id + 'is' + email);
    }
    var customer = {
        id : 32,
       email : 'customer@mailnator.com',
        eventHandler : function(fn) {
            fn(this.id,this.email);
        }
    };

      function causeEvent(_cust){
          _cust.eventHandler(callback);
      }
    causeEvent(customer);
});