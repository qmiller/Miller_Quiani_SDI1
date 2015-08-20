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


name = prompt("Please enter you name: ");
if (name=="") {

    console.log("I asked you to enter your name please?!");
    name = prompt("Please enter you name: ");

}

    gender = prompt("Are you male or female. \nPlease enter 1 for male or 2 for female.");
    if (gender == ""){
        console.log("Please select you gender you are messing up my calculator!");
        gender = prompt("Are you male or female. \nPlease enter 1 for male or 2 for female.");

    }
        alert("Please enter only the a number going forward! Thank you.");

    if (gender == 1) {
        weight = prompt("Please enter your weight.");
        if (weight == ""){
            console.log("You are hard-headed sir and trying to mess up my code. I don't appreciate that.");
            weight = prompt("Please enter your weight.");
        }
        waist = prompt("Please enter your waist measurement. \nMeasure your waist at the naval.");

        factor1 = (Number(weight) * 1.082) + 94.42;
        factor2 = Number(waist) * 4.15;
        leanBody = factor1 - factor2;
        fatWeight = Number(weight) - leanBody;
        fatPercent = (fatWeight * 100) / Number(weight);
        alert("male");

    }else{
        weight = prompt("Please enter your weight.");
        if (weight == ""){
            console.log("You are hard-headed ma'am and trying to mess up my code. I don't appreciate that.");
            weight = prompt("Please enter your weight.");
        }
        waist = prompt("Please enter your waist measurement. \nMeasure your waist at the naval.");
        wrist = prompt("Please enter your wrist measurement.");
        hip = prompt("Please enter your hip measurement");
        forearm = prompt("Please enter your forearm measurement");

        factor1 = (Number(weight) * 0.732) + 8.987;
        factor2 = Number(wrist) / 3.140;
        factor3 = Number(waist) * 0.157;
        factor4 = Number(hip) * 0.249;
        factor5 = Number(forearm) * 0.434;
        leanBody = factor1 + factor2 - factor3 - factor4 + factor5;
        fatWeight = Number(weight) - leanBody;
        fatPercent = (fatWeight * 100) / Number(weight);
        alert("female");
    }
