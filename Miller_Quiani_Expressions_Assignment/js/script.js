/*
Created by Quiani Miller
August 10, 2015
SDI 1508
Expressions Assignment
 */

// variables
var rent;
var cox;
var name;
var numRoommates;
var electric;
var gas;
var month;
var utilities;
var water;
var trash;
var totalUtilities;
var total;
var result;

var rent = 750; //variable for the rent which does not change
var cox = 175; //variable for the cox service which does not change
var name = prompt("Please enter your first name:"); //prompt to get the user name so the output can be personalized
var numRoommates = prompt("How many roommates do you have including yourself?");//prompt for the number of roommates so that the proper math can be calculated.
var electric = prompt("How much is your electric bill?");//prompt for user input for cost of electric bill
var gas = prompt("How much is your gas bill?"); //prompt for user input for cost of gas bill

var month = prompt("Does this month include water and trash? Yes or No. \nType 1 for yes. \nType 2 for no.");
var utilities =[Number(electric), Number(gas), Number(water), Number(trash)]; //array designed to hold all utilities.

if(month == 1) { //if statement used to decide which bills to include

    //alert("yes");//used alert to test correct function of if statement
    var water = prompt ("How much is your water bill"); //prompt for user input for cost of water bill
    var trash = prompt("How much is your trash bill?"); //prompt for user input for cost of sewer and trash
    var totalUtilities = utilities[0] + utilities[1] + utilities[2] + utilities[3] + rent + cox; //math done to get the total of all necessary utilities

}//closes if statement



    //alert("no");//used alert to test the correct function of if statement
    var totalUtilities = utilities[0] + utilities[1] + rent + cox; //math done to get the total of utilities without water and trash

var total = totalUtilities / numRoommates; //math done to get total that will need to be paid by each roommate.


var result = name + " your monthly bill total is $" + totalUtilities + ". You have " + numRoommates + " roommates. Your total due this month is $" + total + "per person."; //variable created for printing out a statement.

console.log(result);//console print out with all necessary information.