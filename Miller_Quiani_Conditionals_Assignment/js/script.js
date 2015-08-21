/**
 * Created by Quiani Miller
 * August 20, 2015
 * SDI 1508
 * Conditionals Assignment
 */

//Body Fat Percentage Calculator. This will tell the user how much body fat they have and if they need to loose any weight.
    //All the variable to be used in the calculator.
var name;
var gender;
var waist;
var wrist;
var hip;
var forearm;
var factor1;
var factor2;
var factor3;
var factor4;
var factor5;
var leanBody;
var fatWeight;
var fatPercent;


name = prompt("Please enter you name: "); //prompt to get user name

(name == "") ? name = prompt("I asked you to enter your name please!!!") : console.log("Thank you for following directions " + name); //ternary statment for checking name prompt.

/*if (name=="") {

    console.log("I asked you to enter your name please?!");
    name = prompt("Please enter you name: ");

}//if statement to check to make sure user entered a name
 */ //code replaced by ternary statement
    gender = prompt("Are you male or female. \nPlease enter 1 for male or 2 for female."); //prompt to get user gender
    if (gender == ""){
        console.log("Please select you gender you are messing up my calculator!");
        gender = prompt("Are you male or female. \nPlease enter 1 for male or 2 for female.");

    } //if statement to ensure user input gender
        alert("Please enter only the a number going forward! All answers are in pounds and inches. Thank you."); //alert to inform the user of how to answer all questions.

    if (gender == 1) {
        weight = prompt("Please enter your weight."); //prompt to get weight
        if (weight == ""){
            console.log("You are hard-headed sir and trying to mess up my code. I don't appreciate that."); //statement inform user they did not input a weight
            weight = prompt("Please enter your weight."); //prompt to get weight
        } // if statement to determine gender of user.
        waist = prompt("Please enter your waist measurement. \nMeasure your waist at the naval."); //prompt to get waist measurement
        if (waist == ""){
            console.log("You are hard-headed sir and trying to mess up my code. I don't appreciate that."); //prompt because waist measurement was not placed.
            waist = prompt("Please enter your waist measurement.");
        }//if statement used to gettest waist measurment
        factor1 = (Number(weight) * 1.082) + 94.42; //math
        factor2 = Number(waist) * 4.15; //math
        leanBody = factor1 - factor2; //math to get lean body weight
        fatWeight = Number(weight) - leanBody; //math to get body fat weight
        fatPercent = (fatWeight * 100) / Number(weight); //math to get body fat percentage
        //alert("male"); //testing

    }else{ //statement if gender is not 1
        weight = prompt("Please enter your weight."); //prompt to get weight
        if (weight == ""){ //if statment to test if weight is not entered
            console.log("You are hard-headed ma'am and trying to mess up my code. I don't appreciate that."); // console.log to tell the user they did not enter a weight
            weight = prompt("Please enter your weight."); //prompt to get weight a second time.
        }//end of if statement

        waist = prompt("Please enter your waist measurement. \nMeasure your waist at the naval."); //prompt to get waist measurement
        if (waist == "") {//if statement to test if waist measurement was entered.
            console.log("You are hard-headed ma'am and trying to mess up my code. I don't appreciate that.");//console.log to inform user no measuement was entered.
            waist = prompt("Please enter your waist measurement."); //prompt to get waist measurement again.
        } //end of if statement

        wrist = prompt("Please enter your wrist measurement."); //prompt to get wrist measurement
        if (wrist == "") { //if statement to test for user input
            console.log("You are hard-headed ma'am and trying to mess up my code. I don't appreciate that."); //statement to inform user of no input.
            wrist = prompt("Please enter your wrist measurement."); //prompt to get wrist input again
        } //end of if statement

        hip = prompt("Please enter your hip measurement"); //prompt to get hip measurement
        if (hip == "") { //if statement to test for user inpurt
            console.log("You are hard-headed ma'am and trying to mess up my code. I don't appreciate that."); //inform user of no input.
            hip = prompt("Please enter your hip measurement");//prompt for hip measurement again.
        }//end of if statement

        forearm = prompt("Please enter your forearm measurement"); //prompt for forearm measurement
        if (hip == "") {
            console.log("You are hard-headed ma'am and trying to mess up my code. I don't appreciate that."); //inform user of no input.
            forearm = prompt("Please enter your forearm measurement"); //prompt for forearm measurement
        }

        factor1 = (Number(weight) * 0.732) + 8.987; //math
        factor2 = Number(wrist) / 3.140; //math
        factor3 = Number(waist) * 0.157; //math
        factor4 = Number(hip) * 0.249; //math
        factor5 = Number(forearm) * 0.434; //math
        leanBody = factor1 + factor2 - factor3 - factor4 + factor5; //math to get lean body weight
        fatWeight = Number(weight) - leanBody; //math to get fat body weigh
        fatPercent = (fatWeight * 100) / Number(weight); //math to get body fat percentage
        //alert("female"); //testing
    } //end of else statement

if (gender == 1 && fatPercent <= 24){ //if statement to find out if user is male and under 24% bodyfat.
   //alert("skinny man"); //test for above if statement
   console.log(name + ", you sir have a current Body Fat Percentage of " + fatPercent + "%. You are currently healthy. Have a nice day."); //statement to print for user under the above condition

}else if (gender == 1 && fatPercent > 24){//if statement to find out if user is male and over 24% bodyfat.
    //alert("fat man");//test for above if statement
    console.log(name + ", you sir have a current Body Fat Percentage of " + fatPercent + "%. Would you like to go to the gym?");//statement to print for user under the above condition

}else if (gender != 1 && fatPercent <= 32){//if statement to find out if user is female and under 32% bodyfat.
    //alert("skinny woman");//test for above if statement
    console.log(name + ", you ma'am have a current Body Fat Percentage of " + fatPercent + "%. You are currently healthy. Have a nice day.");//statement to print for user under the above condition

}else{//if statement to find out if user is female and over 32% bodyfat.
    //alert("big woman");//test for above if statement
    console.log(name + ", you ma'am have a current Body Fat Percentage of " + fatPercent + "%. Would you like to go to the gym?");//statement to print for user under the above condition

}

