// this is a single line comment
// another comment...
// 

console.log('hello from javascript');
console.log('Randy Russell');

// debugger

var a = 10;
var b = 20;
var c = a + b;
var d = c * b;
var e = d * (b - a);
var power = Math.pow(2,8);
var room = 8 * 12;

console.log('e is ' + e);
console.log('2 to the 8th power is ' + power)
console.log("The area of a room that is 8'x12' foot is " + room);
// example
// you have a room that is 8 ft by 12 ft
// write the code that will compute the area of the room and print that out to the console
// example
// you have a cylinder that is 5 x 7 x 9 inches
// what is the volume in cu.in.
//
var radius = 5;
var height = 9;
var circleArea = Math.PI * Math.pow(radius * 2);
var circleVol = circleArea * height;

console.log('The Volume of the cylinder is ' + circleVol);

//you are a floor painter
//you have an exceptionall large bucket of paint
//you can paint 29,500 square feet of surface without having to refill.
//every house you encounter has 3 rooms. herer are the dimenions
//3x5
//7x9
//6x2
//how many full houses  can you pain before running out of paint.
//
//
var bucket = 29572;
var room1 = 3 * 5;
var room2 = 7 * 9;
var room3 = 6 * 2;
var fullHouse = room1 + room2 + room3;
var numberHouses = bucket / fullHouse; 
homesToPaint = Math.floor(numberHouses);
console.log(homesToPaint);

// you are a spaceperson, with lasers
// you can travel the speed of light
// you are in the adromeda galaxy, somewhere
// you want to destroy justin bieber
// if you leave as soon as possible
// if you leave tomoorow
// when will you arrive to meet the bieb.
// i.e., how many days will it take you to get here
// please hurry!
//

var lightYearsAway = 2538000;
var daysPerYear = 365;
var totalDays = lightYearsAway * daysPerYear;

console.log(totalDays);

var firstName = prompt('Enter your fisrst name');

console.log('Your First name is ' + firstName);

var lastName = prompt('Enter your last name');
var fullName = firstName + lastName;
console.log('Your full name is ' + fullName);

var l = prompt('Enter the Length of your room')
l = parseInt(l);
var w = prompt('Enter the width of your room')
w = parseInt(w);
var h = prompt('Enter the height of your room')
h = parseInt(h);
var volume = l * w * h;

console.log(volume);

var age = prompt('what is your age');
age = parseInt(age);
if(age < 18)
    console.log('youcannot vote');
else 
    console.log('you can vote');





























