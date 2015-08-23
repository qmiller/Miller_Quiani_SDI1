/**
 * Created by Cue_Designs on 8/22/15.
 */

/*function functionName(){
//code the function passes
}


funcName(arguemnt1, argument2);

function funcName (parameter1,parameter2){
    //code the function runs
}
*/
var total = calcArea(30,20);

function calcArea(width, height){

    var area = width * height;
    return area;

}
console.log(total);


/*function dogYears(age){//parameters

    var dogYears = age * 7;
    console.log("Rex is " + dogYears + " years old.")
}

dogYears(4);//arguments
dogYears(5);
dogYears(7);
*/

var calcArea1 = function(w, h){

    var area = w * h;
    return area;
}
var a = calcArea1(20, 30);
console.log(a);