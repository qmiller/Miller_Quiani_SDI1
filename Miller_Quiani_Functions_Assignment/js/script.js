/**
 * Created by Quiani Miller
 * SDI 1508
 * August 25, 2015
 * Functions Assignment
 */

//variables

var myName = prompt("Please enter your name: ");


var gameType = confirm("Please click ok for Lotto or cancel for Powerball");



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
function powerBall(min, max, num){

    alert("Powerball numbers");
    var randomNum = [];

   for (var i = 0; i < num; i++) {

       randomNum[i] = Math.random() * (max - min) + min;
       randomNum[i] = Math.round(randomNum [i]);
       console.log(randomNum);
   }
    return randomNum;
}

function lotto(){

    alert("Lottery numbers!!!");
    var randomNum = [];

    for (var i = 0; i < num; i++) {

        randomNum[i] = Math.random() * (max - min) + min;
        randomNum[i] = Math.round(randomNum [i]);
        console.log(randomNum);
    }
    return randomNum;
}



//math.random() * (max - min ) + min
//numbers between 1 -59
// call random numbers

//output to console for numbers
//myName = nameValidation(myName);
//console.log("Thank you " + myName + ".");

//powerBall();
//lotto();

(gameType == true) ? lotto() : powerBall();