//Basic Expressions

//var a = 2; // sets up variable a and defines it with 2
//a = a + 3; // adds 3 to a
//console.log(a); //prints to the console

//Example Expressions

//var yearBorn = 1984;
//var age = 2015 - yearBorn;
//console.log(age);

//Arithmetic Operators

//area of a triangle is half the width times the height

//var width = 4;
//var height = 5;
//var area = width * height/2;
//console.log(area);

//Modulo

//var remainder = 32 % 10;
//console.log(remainder);

//Order of operations (PEMDAS)

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

// the average is the sum of the items divided by the number of items
var average = (quiz1 + quiz2 + quiz3 +quiz4)/4;
//console.log(average);

var length = 7;
var width = 6;
var perimeter = length * 2 + width * 2;
//console.log(perimeter);

//Arrays
//var orangeBins = [234, 567, 883];
//var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
//console.log(total);

//Concatenating
//var firstName = "Quiani";
//var lastName = "Miller";
//var fullName = firstName + " " + lastName;
//console.log(fullName);

//Casting
var stringVar = "6";
var result = 7 + Number(stringVar);
//console.log(result);

var areaCode = 757;
var firstPart = 951;
var secPart = 6470;

var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(secPart);
//console.log(phoneNo);

//Assignement Operators
var a = 3;
//a += 4; //a = a + 4
//a *= 4; //a = a * 4
//a /= 4; //a = a / 4
//a -= 4; //a = a - 4
//a++ ; //a = a + 1 // a+=1
a--; //a = a - 1 // a-=1

console.log(a);