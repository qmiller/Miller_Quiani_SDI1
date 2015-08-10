/**
 * Created by Quiani Miller on 8/10/15.
 */


var rent = 750; //variable for rent which does not change
var cox = 175; //variable for cox service which does not change
var name = prompt("Please enter your first name:"); //prompt to get the user name so the output can be personalized
var numRoommates = prompt("How many roommates do you have?");//prompt for the number of roommates so that the proper math can be calculated.
var electric = prompt("How much is your electric bill?");//prompt for user input for cost of electric bill
var water = prompt ("How much is your water bill"); //prompt for user input for cost of water bill
var trash = prompt("How much is your sewer and trash bill?"); //prompt for user input for cost of sewer and trash
var gas = prompt("How much is your gas bill?"); //prompt for user input for cost of gas bill
var utilities =[Number(electric), Number(water), Number(gas), Number(trash)]; //array designed to hold all utilities.


var totalUtilities = utilities[0] + utilities[1] + utilities[2] + utilities[3]; //math done to get the total of the array
var total = totalUtilities / numRoommates; //math done to get total that will need to be paid by each roommate.




var result = name + " your monthly bill total is $" + totalUtilities + ". You have " + numRoommates + " roommates. Your total due this month is $" + total + "."; //variable created for printing out a statement.

console.log(result);//console print out with all necessary information. 