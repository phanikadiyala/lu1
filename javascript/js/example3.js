/**
 * Created by pkadiyal on 3/16/14.
 */
$(document).ready(function(){
    var parent = {
        x:32,
        y:32
    };
    var child = Object.create(parent);
    console.log(child instanceof Object);
    console.log(child instanceof parent);
    var child1 = new Object();
    //syntax of instance of - object instanceof constructor
    console.log(child1 instanceof Object);
    // create an object with null as prototype
    /*You can pass null to create a new object that does not have a prototype, but if you do
     this, the newly created object will not inherit anything, not even basic methods like
     toString()*/
    var child2 = Object.create(null);
    console.log(child2 instanceof Object);

    //console.log(child2.toString());
    o = {};
// is equivalent to:
    o = Object.create(Object.prototype);

});
