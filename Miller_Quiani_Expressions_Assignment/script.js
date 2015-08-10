/**
 * Created by Quiani Miller on 8/10/15.
 */


var rent = 750;
var cox = 175;
var name;
var numRoommates;
var electric;
var water;
var trash;
var gas;
var totalUtilities;
var total;
var utilities =[electric, water, trash, gas];


var result = name + " your monthly bill total is $" + totalUtilities + ". You have " + numRoommates + "roommates. Your total due this month is $" + total + ".";
console.log(result);