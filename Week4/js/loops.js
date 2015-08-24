/**
 * Created by Cue_Designs on 8/24/15.
 */
//loops
console.log("---------------Loops---------------");
var b = 10; //sets up the index.

while (b > 0){ //checks the condition
    console.log(b + " little monkeys jumping on the bed.");
    b--; //increments or decrements the index
}

console.log("--------- Do While Loops ---------");
var c = 10;

do{
    console.log(c + " little monkeys jumping on the bed.");
    c--;
}
while(c > 0);

console.log("------------ For Loops -----------");

for (var i = 10; i > 0; i--){
    console.log(i + " little monkeys jumping on the bed.");
}

// Returns a random number between 0 (inclusive) and 1 (exclusive)
function getRandom(){
    return math.random();
}


// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

