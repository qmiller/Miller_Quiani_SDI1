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

    alert("Good luck here are your powerball numbers");
    var randomNum = [];

   for (var i = 0; i < num; i++) {

       randomNum[i] = Math.random() * (max - min) + min;
       randomNum[i] = Math.round(randomNum [i]);


   }
    console.log(randomNum);
    return randomNum;
}

function lotto(min, max){

    alert("Good luck, Here are your lottery numbers!!!");
        var ball1;
        var ball2;
        var ball3;
        var ball4;
        var ball5;
        var ball6;

        ball1 = Math.random() * (max - min) + min;
        ball1 = Math.round((ball1));

        randomNum =  Math.random() * (max - min) + min;
        randomNum =  Math.round((randomNum));

        if(randomNum != ball1) {
            ball2 = randomNum;
        }else{

            randomNum =  Math.random() * (max - min) + min;
            randomNum =  Math.round((randomNum));
        }
        randomNum =  Math.random() * (max - min) + min;
        randomNum =  Math.round((randomNum));

        if(randomNum != ball1 && randomNum != ball2){
            ball3 = randomNum;
        }else{

            randomNum =  Math.random() * (max - min) + min;
            randomNum =  Math.round((randomNum));
        }
        randomNum =  Math.random() * (max - min) + min;
        randomNum =  Math.round((randomNum));

        if(randomNum != ball1 && randomNum != ball2 && randomNum != ball3){
            ball4 = randomNum;
        }else{

            randomNum =  Math.random() * (max - min) + min;
            randomNum =  Math.round((randomNum));
        }
        randomNum =  Math.random() * (max - min) + min;
        randomNum =  Math.round((randomNum));

        if(randomNum != ball1 && randomNum != ball2 && randomNum != ball3 && randomNum != ball4){
            ball5 = randomNum;
        }else{

            randomNum =  Math.random() * (max - min) + min;
            randomNum =  Math.round((randomNum));
        }
        randomNum =  Math.random() * (max - min) + min;
        randomNum =  Math.round((randomNum));

        if(randomNum != ball1 && randomNum != ball2 && randomNum != ball3 && randomNum != ball4 && randomNum != ball5){
            ball6 = randomNum;
        }else{

            randomNum =  Math.random() * (max - min) + min;
            randomNum =  Math.round((randomNum));
        }
    console.log("Your lottery numbers are " + ball1 +", " + ball2 + ", " + ball3 + ", " + ball4 + ", " + ball5 + " and " + ball6 + ".");
}

function powerBall2(min, max){
        var ball1;
        var ball2;
        var ball3;
        var ball4;
        var ball5;
        var pBall;

        ball1 = Math.random() * (max - min) + min;
        ball1 = Math.round((ball1));

    randomNum =  Math.random() * (max - min) + min;
    randomNum =  Math.round((randomNum));

        if(randomNum != ball1) {
            ball2 = randomNum;
            }else{

            randomNum =  Math.random() * (max - min) + min;
            randomNum =  Math.round((randomNum));
        }
    randomNum =  Math.random() * (max - min) + min;
    randomNum =  Math.round((randomNum));

        if(randomNum != ball1 && randomNum != ball2){
            ball3 = randomNum;
            }else{

            randomNum =  Math.random() * (max - min) + min;
            randomNum =  Math.round((randomNum));
        }
    randomNum =  Math.random() * (max - min) + min;
    randomNum =  Math.round((randomNum));

        if(randomNum != ball1 && randomNum != ball2 && randomNum != ball3){
            ball4 = randomNum;
            }else{

            randomNum =  Math.random() * (max - min) + min;
            randomNum =  Math.round((randomNum));
        }
    randomNum =  Math.random() * (max - min) + min;
    randomNum =  Math.round((randomNum));

    if(randomNum != ball1 && randomNum != ball2 && randomNum != ball3 && randomNum != ball4){
        ball5 = randomNum;
    }else{

        randomNum =  Math.random() * (max - min) + min;
        randomNum =  Math.round((randomNum));
    }

    pBall =  Math.random() * (35 - 1) + 1;
    pBall =  Math.round((pBall));


        console.log("Your Powerball numbers are " + ball1 +", " + ball2 + ", " + ball3 + ", " + ball4 + " and " + ball5 + ". Your Powerball number is " + pBall + ".");
}



//math.random() * (max - min ) + min
//numbers between 1 -59
// call random numbers

//output to console for numbers
//myName = nameValidation(myName);
//console.log("Thank you " + myName + ".");

//powerBall();
//lotto();

(gameType == true) ? lotto(1, 53) : powerBall2(1, 59);