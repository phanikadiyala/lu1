/**
 * Created by pkadiyal on 3/16/14.
 */
$(document).ready(function(){
    var customerA = Object.defineProperties({},{
        id:{
            value:100,
            writable:false,
            configurable:false,
            enumerable:true
        },
        email:{
            value:'customer@mailnator.com',
            writable:true,
            configurable:true,
            enumerable:true
        }
    });
    console.log(customerA);
    console.log(Object.getOwnPropertyDescriptor(customerA,'email'));
    for (var prop in customerA){
        console.log("first loop:" + prop);
    }
    Object.defineProperty(customerA,"email", {enumerable:false});
    for (var prop in customerA){
        console.log("first loop:" + prop);
    }
});
