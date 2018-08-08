"use strict";

/* PLAYGROUND

// if/else
const year = 2018;
let inYearStr = prompt('What year is it?', ' ');
let inYear = Number(inYearStr);
if (inYear === year)
{
    alert("You are correct");
}
else if (inYear < year)
{
    alert(`Too early. The year is ${year}`);
}
else
{
    alert(`Too late. The year is ${year}`);
}

// ternary
const year = 2018;
let inYearStr = prompt('What year is it?', ' ');
let inYear = Number(inYearStr);
alert(`The year ${inYear} is ${(inYear == year)? "": "not "}correct`);

*/

// Task 1
if ("0") {
    alert( "Hello" );  // will print Hello
}

// Task 2
const officialName = "ECMAScript";
let inNameStr = prompt("What's the official name of JavaScript?", "");
if (officialName === inNameStr)
{
    alert("Right!");
}
else
{
    alert(`Wrong. It's ${officialName}`);
}

// Task 3
let inNumber = Number(prompt("What's your number?", ""));
if (inNumber < 0)
{
    alert("Less than zero");
}
else if (inNumber > 0)
{
    alert("More than zero");
}
else
{
    alert("Equals zero");
}

// Task 4
let userName = prompt("Who's there?", "");
if (userName == "Admin")
{
    let password = prompt("Password?", '');
    if (password === "TheMaster")
    {
        alert("Welcome!");
    }
    else if (password === null)
    {
        alert("Canceled");
    }
    else
    {
        alert("Wrong password");
    }
}
else if (userName === null)
{
    alert("Canceled.");
}
else
{
    alert(`Unknown user: ${userName}`);
}

// Task 5
let a = Number(prompt("a?", ""));
let b = Number(prompt("b?", ""));
let result = (a + b < 4)? "Below" : "Over";
alert(" result is " + result);


// Task 6
let login = prompt("User?","");
let message = ((login === 'Employee')? 'Hello' :
                ((login === 'Director')? 'Greetings' :
                    ((login === '')?'No login' : "")));
alert(message);
                