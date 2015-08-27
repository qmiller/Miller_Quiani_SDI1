/**
 * Created by Quiani Miller
 * Functions Worksheet
 * August 24, 2015.
 */

//var myName = prompt("Please enter your name: ");

function nameValidation(firstName) {

    var timesClicked = 1;

    while (firstName === "") {
        firstName = prompt("Please don't leave this blank \n\nPlease enter your name:");

        timesClicked++;

        if (timesClicked === 3) {

            console.log("Enough! I don't have time to play!")

            break;

        }
    }
    return firstName;


}

//function to generate random numbers

function randomNumGen(){

    //Math objects have properties and methods
    //Math.random()
     var randomNum;
    for  (var i = 0; i<4; i++) {
        randomNum = Math.random() * (20 - 10) + 10;
        randomNum = Math.round(randomNum);
    }
    console.log(randomNum);
}

//myName = nameValidation(myName);
//console.log("Thank you, " + myName + ".");

randomNumGen();