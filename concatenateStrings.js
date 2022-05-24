// Exercise # 1

var fullName = prompt("Please enter your name");
alert("Hi, " + fullName);

// Exercise # 2
var tableNum = parseInt(prompt("Enter Table number 'must be greter than 0'"));

if (tableNum > 0){
document.write("<h2>" + tableNum + " x 1 = " + tableNum * 1 + "</h2>");
document.write("<h2>\n" + tableNum + " x 2 = " + tableNum * 2 + "</h2>");
document.write("<h2>\n" + tableNum + " x 3 = " + tableNum * 3 + "</h2>");
document.write("<h2>\n" + tableNum + " x 4 = " + tableNum * 4 + "</h2>");
document.write("<h2>\n" + tableNum + " x 5 = " + tableNum * 5 + "</h2>");
document.write("<h2>\n" + tableNum + " x 6 = " + tableNum * 6 + "</h2>");
document.write("<h2>\n" + tableNum + " x 7 = " + tableNum * 7 + "</h2>");
document.write("<h2>\n" + tableNum + " x 8 = " + tableNum * 8 + "</h2>");
document.write("<h2>\n" + tableNum + " x 9 = " + tableNum * 9 + "</h2>");
document.write("<h2>\n" + tableNum + " x 10 = " + tableNum * 10 + "</h2>");
}
else
{
    let tableNum = 5;
    document.write("<h2>" + tableNum + " x 1 = " + tableNum * 1 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 2 = " + tableNum * 2 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 3 = " + tableNum * 3 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 4 = " + tableNum * 4 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 5 = " + tableNum * 5 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 6 = " + tableNum * 6 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 7 = " + tableNum * 7 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 8 = " + tableNum * 8 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 9 = " + tableNum * 9 + "</h2>");
    document.write("<h2>\n" + tableNum + " x 10 = " + tableNum * 10 + "</h2>");
    
}

// Exercise # 3
var cityName = prompt("Please enter your city");

if (cityName.toLowerCase() == "karachi"){
    alert("Welcome to city of lights");
}
else
{
    alert("Welcome to city of " + cityName);
}

// Exercise # 4
var gender = prompt("Please enter your gender");

if (gender.toLowerCase() == "male"){
    alert("Good Morning Sir!");
}
else if(gender.toLowerCase() == "female"){
    alert("Good Morning Ma'am!");
}
else{
    alert("You have entered incorrect gender.");
}

// Exercise # 5
var signalColor = prompt("Please enter road traffic signal color");

if (signalColor.toLowerCase() == "red"){
    alert("For red signal: vehicles must stop.");
}
else if(signalColor.toLowerCase() == "yellow"){
    alert("For yellow signal: vehicles should get ready to move.");
}
else if(signalColor.toLowerCase() == "green"){
    alert("For green signal: vehicles can move now.");
}
else{
    alert("You have entered incorrect traffic signal color.");
}

// Exercise # 6
var maxAge = parseInt(prompt("Please enter maximum age"));
var currentAge = parseInt(prompt("Please enter your current age"));

if (currentAge <= maxAge ){
    alert("You are welcome.");
}
else{
    alert("Sorry! you are not eligible.");
}

// Exercise # 7
var remainingFuel = parseFloat(prompt("Please enter remaining fuel in car (in litres)"));

if (remainingFuel < 0.25 ){
    alert("Please refill the fuel in your car");
}
else{
    alert("You have enough fuel in your car and good to go")
}

// Exercise # 9
var marksObtainedSubject1 = parseInt(prompt("Please enter marks obtained for subject 1 (out of 100)"));
var marksObtainedSubject2 = parseInt(prompt("Please enter marks obtained for subject 2 (out of 100)"));
var marksObtainedSubject3 = parseInt(prompt("Please enter marks obtained for subject 3 (out of 100)"));

let totalMarks = 300;

let percentage = ((marksObtainedSubject1 + marksObtainedSubject2 + marksObtainedSubject3) / totalMarks) * 100;

if (percentage >= 80){
    document.write("<h1>Marks Sheet</h1>\n\n");
    document.write("<h2>Total marks : " + totalMarks + "</h2>\n");
    document.write("<h2>Marks obtained : " + (marksObtainedSubject1 + marksObtainedSubject2 + marksObtainedSubject3) + "</h2>\n");
    document.write("<h2>Percentage : " + percentage.toFixed(2) + "%</h2>\n");
    document.write("<h2>Grade : A-one</h2>\n");
    document.write("<h2>Remarks : Excellent</h2>\n");
}
else if(percentage >= 70){
    document.write("<h1>Marks Sheet</h1>\n\n");
    document.write("<h2>Total marks : " + totalMarks + "</h2>\n");
    document.write("<h2>Marks obtained : " + (marksObtainedSubject1 + marksObtainedSubject2 + marksObtainedSubject3) + "</h2>\n");
    document.write("<h2>Percentage : " + percentage.toFixed(2) + "%</h2>\n");
    document.write("<h2>Grade : A</h2>\n");
    document.write("<h2>Remarks : Good</h2>\n");
}
else if(percentage >= 60){
    document.write("<h1>Marks Sheet</h1>\n\n");
    document.write("<h2>Total marks : " + totalMarks + "</h2>\n");
    document.write("<h2>Marks obtained : " + (marksObtainedSubject1 + marksObtainedSubject2 + marksObtainedSubject3) + "</h2>\n");
    document.write("<h2>Percentage : " + percentage.toFixed(2) + "%</h2>\n");
    document.write("<h2>Grade : B</h2>\n");
    document.write("<h2>Remarks : You need to improve</h2>\n");
}
else
{
    document.write("<h1>Marks Sheet</h1>\n\n");
    document.write("<h2>Total marks : " + totalMarks + "</h2>\n");
    document.write("<h2>Marks obtained : " + (marksObtainedSubject1 + marksObtainedSubject2 + marksObtainedSubject3) + "</h2>\n");
    document.write("<h2>Percentage : " + percentage.toFixed(2) + "%</h2>\n");
    document.write("<h2>Grade : Fail</h2>\n");
    document.write("<h2>Remarks : Sorry</h2>\n");
}

// Exercise # 10
var item1Name = prompt("Please enter name of first item");
var item1Price = parseInt(prompt("Please enter price of first item"));
var item1OrderedQty = parseInt(prompt("Please enter quantity of first item"));

var item2Name = prompt("Please enter name of second item");
var item2Price = parseInt(prompt("Please enter price of second item"));
var item2OrderedQty = parseInt(prompt("Please enter quantity of second item"));

let shippingCharges = 250;

let totalCost = (( item1Price * item1OrderedQty) + ( item2Price * item2OrderedQty) ) + shippingCharges;

if (totalCost > 2000){
    document.write("<h1>Shopping Cart</h1>\n\n");
    document.write("<h2>Price of " + item1Name + " is " + item1Price + "</h2>\n");
    document.write("<h2>Quantity of " + item1Name + " is " + item1OrderedQty + "</h2>\n");
    document.write("<h2>Price of " + item2Name + " is " + item2Price + "</h2>\n");
    document.write("<h2>Quantity of " + item2Name + " is " + item2OrderedQty + "</h2>\n\n");
    document.write("<h2>Shipping Charges " + shippingCharges + "</h2>\n\n");
    document.write("<h2>Total cost of your order is " + totalCost + " PKR</h2>\n");
    document.write("<h2>Discounted price is " +  (totalCost - (totalCost * 0.1)) +
     " PKR</h2>\n");
}
else
{
    document.write("<h1>Shopping Cart</h1>\n\n");
    document.write("<h2>Price of " + item1Name + " is " + item1Price + "</h2>\n");
    document.write("<h2>Quantity of " + item1Name + " is " + item1OrderedQty + "</h2>\n");
    document.write("<h2>Price of " + item2Name + " is " + item2Price + "</h2>\n");
    document.write("<h2>Quantity of " + item2Name + " is " + item2OrderedQty + "</h2>\n\n");
    document.write("<h2>Shipping Charges " + shippingCharges + "</h2>\n\n");
    document.write("<h2>Total cost of your order is " + totalCost + " PKR</h2>\n");
    document.write("<h2>No discount offered for total amount less than or equal to 2000 PKR</h2>\n");
}

// Exercise # 11

var guessNumber = parseInt(prompt("Please enter number (between 1 to 10) to guess secret number"));
let secretNumber = 5;

if (guessNumber == secretNumber){
    alert("Bingo! Correct answer");
}
else if((guessNumber == secretNumber - 1) || (guessNumber == secretNumber + 1) )
{
    alert("Close enough to the correct answer");
    
}
else
{
    alert("Not so close to the correct answer");
}

// Exercise # 12

var checkNumber = parseInt(prompt("Please enter number you want to check divisible by 3 or not?"));
let resultantNumber = checkNumber % 3;

if (resultantNumber == 0){
    alert(checkNumber + " is divisible by 3");
}
else
{
    alert(checkNumber + " is not divisible by 3");
}

// Exercise # 13

var team1Name = prompt("Please enter name of first team");
var team1Score = parseInt(prompt("Please enter total score of first team"));

var team2Name = prompt("Please enter name of second team");
var team2Score = parseInt(prompt("Please enter total score of second team"));

if (team1Score > team2Score){
    alert(team1Name + " have won the game");
}
else if (team1Score < team2Score)
{
    alert(team2Name + " have won the game");
    
}
else
{
    alert("The game has been tied");
}

// Exercise # 14

var firstInput = prompt("First input");
var secondInput = prompt("Second input");
var thirdInput = prompt("Third input");

if (typeof(firstInput) == "string"){
    alert(firstInput + " is a string");
}
else if (typeof(firstInput) == "number"){
    alert(firstInput + " is a number");
}
else if (typeof(firstInput) == "boolean"){
    alert(firstInput + " is a boolean");
}

if (typeof(secondInput) == "string"){
    alert(secondInput + " is a string");
}
else if (typeof(secondInput) == "number"){
    alert(secondInput + " is a number");
}
else if (typeof(secondInput) == "boolean"){
    alert(secondInput + " is a boolean");
}

if (typeof(thirdInput) == "string"){
    alert(thirdInput + " is a string");
}
else if (typeof(thirdInput) == "number"){
    alert(thirdInput + " is a number");
}
else if (typeof(thirdInput) == "boolean"){
    alert(thirdInput + " is a boolean");
}


// Exercise # 15

var evenOddNumber = parseInt(prompt("Please enter number you want to check even or odd?"));
let resNumber = evenOddNumber % 2;

if (resNumber == 0){
    alert(evenOddNumber + " is even number");
}
else
{
    alert(evenOddNumber + " is odd number");
}

// Exercise # 16

var temperature = parseInt(prompt("Please enter today's temprature"));

if (temperature > 40){
    alert(temperature + " degrees! It is too hot outside.");
}
else if (temperature > 30)
{
    alert(temperature + " degrees! The Weather today is Normal.");
}
else if (temperature > 20)
{
    alert(temperature + " degrees! Today's Weather is cool.");
}
else{
    alert(temperature + " degrees! OMG Today's weather is so Cool.");
}

// Exercise # 17

var num1 = parseInt(prompt("Please enter first number"));
var num2 = parseInt(prompt("Please enter second number"));
var operator = prompt("Please enter the operator (+, -, *, /, %)");


if (operator == "+" || operator == "-" || operator == "*" || operator == "/" || operator == "%"){
    if (operator == "+"){
    let numResult = num1 + num2;
    alert(num1 + " " + operator + " " + num2 + " is " + numResult);
    }
    if (operator == "-"){
        let numResult = num1 - num2;
        alert(num1 + " " + operator + " " + num2 + " is " + numResult);
    }
    if (operator == "*"){
        let numResult = num1 * num2;
        alert(num1 + " " + operator + " " + num2 + " is " + numResult);
    }
    if (operator == "/"){
        let numResult = num1 / num2;
        alert(num1 + " " + operator + " " + num2 + " is " + numResult);
    }
    if (operator == "%"){
        let numResult = num1 % num2;
        alert(num1 + " " + operator + " " + num2 + " is " + numResult);
    }
}
else {
    alert("Invalid operator");
}

// Exercise # 18

var nameOfDay = prompt("Please enter day name");

if (nameOfDay.toLowerCase() == "monday" || nameOfDay.toLowerCase() == "tuesday" || nameOfDay.toLowerCase() == "wednesday" || nameOfDay.toLowerCase() == "thursday" || nameOfDay.toLowerCase() == "friday"){
    alert("It's a weekday");
}
else if (nameOfDay.toLowerCase() == "saturday"){
    alert("It's weekend");
}
else if (nameOfDay.toLowerCase() == "sunday"){
    alert("Yay! It's a holiday");
}
else
{
    alert("Invalid day name");
}

// Exercise # 19

var userScore = parseInt(prompt("Please enter user's score"));

if (userScore > 50){
    alert("You are passed");
}
else
{
    alert("Try again!");
}
 
// Exercise # 20

var _num1 = parseInt(prompt("Please enter first number"));
var _num2 = parseInt(prompt("Please enter second number"));

if (_num1 > _num2){
    alert("The greater number of " + _num1 + " and " + _num2 + " is " + _num1 + ".");
}
else if (_num1 < _num2)
{
    alert("The greater number of " + _num1 + " and " + _num2 + " is " + _num2 + ".");
}
else{
    alert("Both numbers are equal.");
}

// Exercise # 21

var languageCode = prompt("Please enter language code (code must be 'es', 'de' or 'en')");

if (languageCode.toLowerCase() == "es"){
    alert("Hola Mundo");
}
else if (languageCode.toLowerCase() == "de")
{
    alert("Hallo Welt");
}
else{
    alert("Hello, World");
}

// Exercise # 22

var isPositiveInteger = parseInt(prompt("Please enter number to check positive or negative"));

if ( isPositiveInteger >= 0){
    alert(isPositiveInteger + " is a positive integer");
}
else{
    alert(isPositiveInteger + " is a negative integer");
}

// Exercise # 23

var num3 = parseInt(prompt("Please enter a number"));
var noun = prompt("Please enter a noun");

if ( num3 >= 0 && num3 < 2){
    alert(num3 + " " + noun);
}
else{
    alert(num3 + " " + noun + "s");
}
