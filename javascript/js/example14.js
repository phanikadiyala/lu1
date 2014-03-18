/**
 * Created by pkadiyal on 3/17/14.
 */
$(document).ready(function(){
    var customer = {
        id:32,
        email:'customer@mailnator.com'
    };
    /*The value to convert to a JSON string.*/
    var serialized_customer = JSON.stringify(customer);
    console.log(serialized_customer);
    /*Returns the Object corresponding to the given JSON text.*/
    var customer_deserialized = JSON.parse(serialized_customer);
    console.log(customer_deserialized);

    /* Function, RegExp, and Error objects and the undefined value cannot be serialized
     or restored*/

    /* The toString() method returns a string representing object. toString() returns "[object type]", where type is the object type. */

    function Dog(name,breed,color,sex) {
        this.name=name;
        this.breed=breed;
        this.color=color;
        this.sex=sex;
    }
    theDog = new Dog("Gabby","Lab","chocolate","female");
   console.log(theDog.toString()); //returns [object Object]
    var number = 50;
    var sringtest = number.toString();
    console.log(typeof sringtest);

    /*var str = "Hello World!";
    var res = str.valueOf();
    console.log(typeof res);*/
  /*The toJSON() method converts a Date object into a string, formatted as a JSON date.*/
    var d = new Date();
    console.log(d.toJSON());

});
