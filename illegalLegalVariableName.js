var age = 17, fullName = "Ali Raza", institute = "SMIT";
console.log(age, fullName, institute);


// Legal variable names

var age, fullName, _class, $currency, numberOfStudents;
console.log(age, fullName, _class, $currency, numberOfStudents);


// Illegal variable names

// var 1age, *fullName, &class, @currency, number!Of!Students;
// console.log(1age, *fullName, &class, @currency, number!Of!Students);

document.write("<h1>Hello to the world of JavaScript</h1>");
document.write("<h2>Legal / Illegal variable name examples</h2>");
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<h3>a. Variable names can only contain <i>alphabets, numbers, dollar '$' signs </i> and <i>underscores '_'</i>. For example $my_1stVariable</h3>");
document.write("<h3>b. Variables must begin with a <i>dollar '$' sign, underscore '_'</i> or <i>alphabet</i>. For example $name, _name or name</h3>");

document.write("<h3>c. Variable names are case <u>sensitive</u></h3>");

document.write("<h3>d. Variable names should not be JS <u>keywords</u></h3>");

/* 
a. A heading stating “Rules for naming JS variables”
b. Variable names can only contain ______, ______, 
______ and ______. 
For example $my_1stVariable
c. Variables must begin with a ______, ______ or 
_____. For example $name, _name or name
d. Variable names are case _________
e. Variable names should not be JS _________
-- END -
 */
/*
alert("I am " + age + " years old");

var numberOfVists = 21;
alert("You have visited this site " + numberOfVists + " times");

var birthYear = 1990;
document.write("<hr/>");
document.write("<h1>Below text written through Javascript</h2>");
document.write("<h2>My birth year is " + birthYear + "</h2>");
document.write("<h2>Data type of my declared variable is " + typeof(birthYear) + "</h2>" );




var visitorName = "John Doe";
var productTitle = "T-Shirt(s)";
var quantity = 5;

document.write("<h3>" + visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store</h3>");

document.write("<hr/>");
*/