/**
 * Created by pkadiyal on 3/17/14.
 */
$(document).ready(function() {
    var customer = {
        id:32,
        email:'customer@mailnator.com'
    };
    var customerA = Object.create(customer);
    customerA.gender = 'male';
    customerA.phone  = '5437438463';
    Object.defineProperty(customerA,'phone',{enumerable:false});
    console.log(customerA);
    console.log(customer);
    console.log('id' in customerA);
    console.log('gender' in customerA);
    console.log(customerA.hasOwnProperty('id'));
    console.log(customerA.hasOwnProperty('gender'));
    console.log(customerA.propertyIsEnumerable('id'));
    console.log(customerA.propertyIsEnumerable('gender'));
    console.log(customerA.propertyIsEnumerable('phone'));
    console.log('\n Printing CustomerA properties as name:value pairs: \n');
    for (var prop in customerA){
        console.log(prop + ':' + customerA[prop]);
    }
    //console.log(Object.keys(customerA));
    /*The Object.keys() method returns an array of a given object's own enumerable properties, */
   var test = Object.keys(customerA);

    for (var prop in test){
        console.log(test[prop]);
    }


});
