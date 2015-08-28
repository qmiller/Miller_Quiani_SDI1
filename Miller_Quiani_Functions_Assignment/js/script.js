/**
 * Created by Quiani Miller
 * SDI 1508
 * August 25, 2015
 * Functions Assignment
 */

//variables

var myName = prompt("Please enter your name: ");
var gameType = confirm("Please click ok for Lotto or cancel for Powerball");



function nameValidation(firstName) { //function to check if user enterd name.

    var timesClicked = 0; //variable for counter

    while (firstName === "") {
        firstName = prompt("Please don't leave this blank \n\nPlease enter your name:"); //output to user

        timesClicked++;

        if (timesClicked === 3) { // if statement that counts number of times the button is clicked

            console.log("Enough! I don't have time to play!"); //output to user to once number of clicks is reached.

            break; //releases out of loop

        }
    }
    return firstName; //returns the name to the main code


}





function lotto(min, max){ //function for lotto

    alert("Good luck, Here are your lottery numbers!!!");
        var ball1; //variable for balls
        var ball2; //variable for balls
        var ball3; //variable for balls
        var ball4; //variable for balls
        var ball5; //variable for balls
        var ball6; //variable for balls
        var result; //variable for reults

        ball1 = Math.random() * (max - min) + min; //ball 1 random  number formula
        ball1 = Math.round((ball1)); ////rounds number to a whole number for ball 1

        randomNum =  Math.random() * (max - min) + min; // random number to get ball 2
        randomNum =  Math.round((randomNum)); //rounds number for ball 2 ro a whole number.

        if(randomNum != ball1) { //if statement that checks to see if random number found is the same as ball one
            ball2 = randomNum; //sets random number to ball 2
        }else{ //if the random number is the same as ball one runs random number again

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
    result = [ball1, ball2, ball3, ball4, ball5, ball6]; //sets result to an array that holds all of the balls
    return result; //returns the results to the main code
}

function powerBall2(min, max){
    alert("Good luck here are your powerball numbers");
        var ball1; //variable for balls
        var ball2; //variable for balls
        var ball3; //variable for balls
        var ball4; //variable for balls
        var ball5; //variable for balls
        var pBall; //variable for balls
        var result; //variable for reults

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

    //result = console.log("Your Powerball numbers are " + ball1 +", " + ball2 + ", " + ball3 + ", " + ball4 + " and " + ball5 + ". Your Powerball number is " + pBall + ".");

    result = [ball1, ball2, ball3, ball4, ball5, pBall]; //sets result to an array that holds all of the balls

    return result ; //returns the results to main code
    }



//math.random() * (max - min ) + min
//numbers between 1 -59
// call random numbers

//output to console for numbers
myName = nameValidation(myName); //runs name validation function
console.log("Thank you " + myName + "."); //prints out name

//powerBall();
//lotto();

if (gameType == true) { // if statement to run either lotto numbers or powerball numbers
    var lottoBalls = lotto(1, 53);
    console.log("Your numbers are " + lottoBalls[0] + ", " + lottoBalls[1] + ", " + lottoBalls[2] + ", " + lottoBalls[3] + ", " + lottoBalls[4] + ", and " + lottoBalls[5]+ "."); //prints out the lucky numbers for the lotto.
}else {
    var pwrBalls = powerBall2(1, 59);
    console.log("Your numbers are " + pwrBalls[0] + ", " + pwrBalls[1] + ", " + pwrBalls[2] + ", " + pwrBalls[3] + ", " + pwrBalls[4] + ". Your Powerball number is " + pwrBalls[5]+ "."); //prints out the lucky numbers for the powerball as well as the powerball number. 
}
