/**
 * Created by Quiani Miller on 8/10/15.
 */


var rent = 750;
var cox = 175;
var name = prompt("Please enter your first name:");
var numRoommates = prompt("How many roommates do you have?");
var electric = prompt("How much is your electric bill?");
var water = prompt ("How much is your water bill");
var trash = prompt("How much is your sewer and trash bill?");
var gas = prompt("How much is your gas bill?");
var totalUtilities;
var total;

var utilities =[electric, water, trash, gas];


var result = name + " your monthly bill total is $" + totalUtilities + ". You have " + numRoommates + "roommates. Your total due this month is $" + total + ".";
console.log(result);