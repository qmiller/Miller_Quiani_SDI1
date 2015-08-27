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

function lotto(min, max, num){

    alert("Good luck, Here are your lottery numbers!!!");
    var randomNum = [];

    for (var i = 0; i < num; i++) {

        randomNum[i] = Math.random() * (max - min) + min;
        randomNum[i] = Math.round(randomNum [i]);

    }
    console.log(randomNum);
    return randomNum;
}

function powerBall2(min, max, num){
    var randomNum;
    var powerball;
    for(var i = 0 ; i < num; ++i) {
        var ball1 = 0;
        var ball2 = 0;
        var ball3 = 0;
        var ball4 = 0;
        var ball5 = 0;
        var ballCount = 0;

        while(ballCount<num){

            randomNum = Math.random() * (max - min) + min;
            randomNum = Math.round((randomNum));


            switch(powerball){

                case 0:
                    ball1 = randomNum;
                    num++;
                    break;

                case  1:
                    if(randomNum != ball1) {
                        ball2 = randomNum;
                        num++;
                    }
                    break;

                case 2:
                    if(randomNum != ball1 && randomNum != ball2) {
                        ball3 = randomNum;
                        num++;
                    }
                    break;

                case 3:
                    if(randomNum != ball1 && randomNum != ball2 && randomNum != ball3){
                        ball4 = randomNum;
                        num++;
                    }
                    break;
                case 4:
                    if(randomNum != ball1 && randomNum != ball2 && randomNum != ball3 && randomNum != ball4){
                        ball5 = randomNum;
                        num++;
                    }
                    break;


            }
        }

        console.log(ball1, ball2, ball3, ball4, ball5);
    }
}


//math.random() * (max - min ) + min
//numbers between 1 -59
// call random numbers

//output to console for numbers
//myName = nameValidation(myName);
//console.log("Thank you " + myName + ".");

//powerBall();
//lotto();

(gameType == true) ? lotto(1, 53, 6) : powerBall2(1, 59, 5);