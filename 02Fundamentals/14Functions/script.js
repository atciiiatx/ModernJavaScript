"use strict";

/* Playground

function showMessage() 
{
    alert( 'Hello everyone!' );
}
  
showMessage();
showMessage();

*/

// Task 2
function checkAge(age)
{
    return ((age > 18)? true: confirm("Do you have parental permission?"));
}
let myAge = prompt("What is your age?", "");
alert(myAge + " = " + checkAge(myAge));

// Task 3
function min(a, b)
{
    return (a < b)? a : b;
}
let a = prompt("a?", "");
let b = prompt("b?", "");
alert("min of " + a + " and " + b + " = " + min(a, b));

// Task 4
function pow(x, n)
{
    let result = 1;
    for (let i = 0; i < n; ++i)
    { 
        result = result * x;
    }
    return result;
}
let x = prompt("x?", "");
let n = prompt("n?", "");
alert(x + " to the " + n + "th power = " + pow(x, n));