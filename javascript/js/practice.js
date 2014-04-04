/**
 * Created by pkadiyal on 3/20/14.
 */
$(document).ready(function(){
    var parent = {
        x : 32,
        y:32,
        "movie title":'movie'
    };

    var child = Object.create(parent);
   // console.log(child instanceof Object);
    //console.log(child ['movie title']);

    function Student(id,lname){
        this.id = id;
        this.lname = lname;

    }
 var ram = new Student(2,'kk');
    console.log(ram instanceof Student);

    console.log([1,2,3].toString())

    var test = [1,2,3].toString();
    console.log(typeof test);
    console.log((function(x) { f(x); }).toString());

    function simple(){
        console.log ("how are you ?")
    }

    var test = simple ;

    test();

    var simple1 = function(){
        console.log("how do you do?");
    }
    var test1 = simple1;
    test1();
});