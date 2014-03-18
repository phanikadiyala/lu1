/**
 * Created by pkadiyal on 3/17/14.
 */
$(document).ready(function(){
    var strx = '"hello" World!';
    var stry = "'hello' World!";
    var strz  = "\"hello\" World!";
    console.log('\n' + strx + '\n' + stry + '\n' + strz);
    console.log('\t' + strx + '\t' + stry + '\t' + strz);
    console.log('\b' + strx + '\b' + stry + '\b' + strz);

    /*unicode */
    var x = "\u00A9 Netscape Communications";
    console.log(x);
    var y = "\u005C Netscape Communications";
    console.log(y);
  console.log("`nathaniel".split('').reverse().join(''));
});
