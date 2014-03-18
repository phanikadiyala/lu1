/**
 * Created by pkadiyal on 3/17/14.
 */
$(document).ready(function(){
    var customer = {
       id:32,
       email:'customer@mailnator.com'
    };
     var customerA = Object.create(customer);
    customerA.gender = "female";
    /*The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).*/
    console.log(Object.isExtensible(customerA));

    /*The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).*/

    Object.preventExtensions(customerA);
    //delete customerA.gender;
    customerA.orders = 100;
    console.log(customerA);

    /*Object.seal() works like Object.preventExtensions(), but in addition to making the
     object nonextensible, it also makes all of the own properties of that object nonconfigurable.
     This means that new properties cannot be added to the object, and existing
     properties cannot be deleted or configured. Existing properties that are writable can
     still be set, however. There is no way to unseal a sealed object. You can use
     Object.isSealed() to determine whether an object is sealed. */
    var customerB = Object.create(customer);
    customerB.age = 32;
    Object.seal(customerB)
    customerB.state= 'ca';
    delete customerB.age
    console.log(customerB);

    /*The Object.freeze() method freezes an object: that is, prevents new properties from being added to it;
     prevents existing properties from being removed; and prevents existing properties,
     or their enumerability, configurability, or writability, from being changed.
      In essence the object is made effectively immutable. The method returns the object being frozen.*/
      var customerC = Object.create(customer);
    customerC.name = 'phani';

    Object.freeze(customerC)
    customerC.name = 'kadiyala';
    console.log(customerC);
});