/**
 * Created by pkadiyal on 3/20/14.
 */
$(document).ready(function(){
function parentFunction(){
    var privateVariable = 1;
    function incrementPrivateVariable() {
        return privateVariable ++;
    }
    return incrementPrivateVariable();
}
var result = parentFunction();
    console.log(result);
    function parentFunctionx(){
        var privateVariable = 1;
        function incrementPrivateVariable() {
            return privateVariable ++;
        }
        return incrementPrivateVariable();
    }
    result = parentFunctionx();
    //console.log(result());
    //console.log(result());
    console.log(result);
    console.log(parentFunctionx());

});