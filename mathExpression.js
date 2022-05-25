// Exercise # 1
var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));
var result = num1  + num2;
alert("Sum of " + num1 + " and " + num2 + " is " + result);

// Exercise # 2
result = num1  - num2;
alert("Result of subtracting " + num1 + " from " + num2 + " is " + result);

result = num1  * num2;
alert("Result of multiplying " + num1 + " and " + num2 + " is " + result);

result = num1  / num2;
alert("Result of dividing " + num1 + " by " + num2 + " is " + result);

result = num1  % num2;
alert("Remainder of dividing " + num1 + " by " + num2 + " is " + result);

// Exercise # 3
var number;

document.write("<h3>Value after variable declaration is: " + number + "</h3>");

number = 3;

document.write("<h3>Initial value is: " + number + "</h3>");

number++;

document.write("<h3>Value after increment is: " + number + "</h3>");

number = number + 7;

document.write("<h3>Value after addition is: " + number + "</h3>");

number--;

document.write("<h3>Value after decrement is: " + number + "</h3>");

number = number % 3;

document.write("<h3>The remainder is: " + number + "</h3>");

// Exercise # 4
var movieTicketCost = 600;

document.write("<h3>Total cost to buy 5 tickets to a movie is " + movieTicketCost * 5  + " PKR</h3>");

// Exercise # 5
var tableNum = parseInt(prompt("Enter Table number"));

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

// Exercise # 6

var tempratureCelcius = 12, tempratureFahrenheit = 68;

document.write("<h1>" + tempratureCelcius + "&#8451; is " + ((tempratureCelcius * 9/5) + 32) + "&#8457;</h1>");

document.write("<h1>" + tempratureFahrenheit + "&#8457; is " + ((tempratureFahrenheit -32) * 5/9) + "&#8451;</h1>");

// Exercise # 7

var item1Name = prompt("Please enter name of first item");
var item1Price = parseInt(prompt("Please enter price of first item"));
var item1OrderedQty = parseInt(prompt("Please enter quantity of first item"));

var item2Name = prompt("Please enter name of second item");
var item2Price = parseInt(prompt("Please enter price of second item"));
var item2OrderedQty = parseInt(prompt("Please enter quantity of second item"));

let shippingCharges = 150;

let totalCost = (( item1Price * item1OrderedQty) + ( item2Price * item2OrderedQty) ) + shippingCharges;

document.write("<h1>Shopping Cart</h1>\n\n");
document.write("<h2>Price of " + item1Name + " is " + item1Price + "</h2>\n");
document.write("<h2>Quantity of " + item1Name + " is " + item1OrderedQty + "</h2>\n");
document.write("<h2>Price of " + item2Name + " is " + item2Price + "</h2>\n");
document.write("<h2>Quantity of " + item2Name + " is " + item2OrderedQty + "</h2>\n\n");
document.write("<h2>Shipping Charges " + shippingCharges + "</h2>\n\n");
document.write("<h2>Total cost of your order is " + totalCost + " PKR</h2>\n");

// Exercise # 8

var totalMarks = parseInt(prompt("Please enter total marks"));
var obtainedMarks = parseInt(prompt("Please enter obtained marks"));

let percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>\n\n");
document.write("<h2>Total marks : " + totalMarks + "</h2>\n");
document.write("<h2>Marks obtained : " + obtainedMarks + "</h2>\n");
document.write("<h2>Percentage : " + percentage.toFixed(2) + "%</h2>\n");



// Exercise # 9

document.write("<h1>Currency in PKR</h1>\n\n");
document.write("<h2>Total currency in PKR : " + ((10 * 104) + (25 * 28)) + "</h2>\n");


// Exercise # 10

var calcNumber = -2.6666666666666666666;

alert(((calcNumber + 5) * 10) / 2);

// Exercise # 11

var currentYear = 2015;
var birthYear = 1992;

document.write("<h1>The Age Calculator</h1>\n\n");
document.write("<h2>Current Year : " + currentYear + "</h2>\n");
document.write("<h2>Birth Year : " + birthYear + "</h2>\n\n");
document.write("<h2>They are either " +  (currentYear-birthYear) + " or " + ((currentYear-birthYear) + 1) + " years old</h2>\n");

// Exercise # 12

var radius = 12;

document.write("<h1>The Geometrizer</h1>\n\n");
document.write("<h2>Radius of a circller : " + radius + "</h2>\n");
document.write("<h2>The circumference is : " + (2 * 3.142 * radius) + "</h2>\n\n");
document.write("<h2>The area is : " + (3.142 * Math.pow(radius, 2))  + "</h2>\n");


// Exercise # 13

var a = parseInt(prompt("Please enter a number"));

document.write("<br /><br /><h2>Result:</h2>\n");
document.write("<h2>The value of a is: " + a + "</h2>\n");
document.write("<h2>-------------------------</h2>\n\n");

document.write("<h2>The value of ++a is: " + ++a + "</h2>\n");
document.write("<h2>Now the value of a is: " + a + "</h2>\n\n");

document.write("<h2>The value of a++ is: " + a++ + "</h2>\n");
document.write("<h2>Now the value of a is: " + a + "</h2>\n\n");

document.write("<h2>The value of --a is: " + --a + "</h2>\n");
document.write("<h2>Now the value of a is: " + a + "</h2>\n\n");

document.write("<h2>The value of a-- is: " + a-- + "</h2>\n");
document.write("<h2>Now the value of a is: " + a + "</h2>\n\n");

// Exercise # 14

var a1 = 2, b1 = 1;
var result1 = --a1 - --b1 + ++b1 + b1--;

document.write("<br /><br /><h2>a is: " + a1 +"</h2>\n");
document.write("<h2>b is: " + b1 + "</h2>\n");
document.write("<h2>result is: " + result1 + "</h2>\n\n");


// Exercise # 15

var favSnack = "Oreo biscuits", currentAge = 15, maxAge = 85, snackPerDay = 2;

document.write("<br /><br /><h1>The Lifetime Supply Calculator</h1>\n");
document.write("<br /><br /><h2>Favorite Snack : " + favSnack + "</h2>\n");
document.write("<h2>Current Age : " + currentAge + "</h2>\n");
document.write("<h2>Estimated Maximum Age : " + maxAge + "</h2>\n");
document.write("<h2>Amount of snacks per day : " + snackPerDay + "</h2>\n");

document.write("<br /><h2>You will need " + ((maxAge-currentAge)* snackPerDay) + " " + favSnack + " to last you untill the ripe old age of " + maxAge + "</h2>\n\n");
