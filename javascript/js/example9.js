/**
 * Created by pkadiyal on 3/17/14.
 */
$(document).ready(function(){
    var customer = {
      id:32,
      email:'customer@mailnator.com'
    };

    var customerA = Object.create(customer);
    customerA.gender = 'male';
    customerA.phone = "856758646";
    console.log(customerA);
    delete customerA.gender;
    console.log(customerA);
    delete customerA.id;
    console.log(customerA);
    var res_del_phone = delete customerA.phone;
    console.log(res_del_phone);
    var res_del_email = delete customerA.email;
    console.log(customerA);
    /*A delete expression evaluates to true if the delete succeeded or if the delete had no
    effect (such as deleting a nonexistent property).*/
    console.log(res_del_email);

});