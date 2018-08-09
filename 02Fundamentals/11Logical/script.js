"use strict";

/* PLAYGROUND

// OR
let a = true, b = false;
alert(`a:${a}, b:${b}`);
alert("(a || b):" + (a || b));
alert("(a || a):" + (a || a));
alert("(b || b):" + (b || b));

// First Truthy
let currentUser = null;
let defaultUser = "John";
let name = currentUser || defaultUser || "unnamed";
alert(`User: ${name}`);

// AND
let a = true, b = false;
alert(`a:${a}, b:${b}`);
alert("(a && b):" + (a && b));
alert("(a && a):" + (a && a));
alert("(b && b):" + (b && b));

// NOT
alert(!true);
alert(!false);
                
*/

// Task 1
alert( null || 2 || undefined ); // 2

// Task 2
alert( alert(1) || 2 || alert(3) ); // 1 2

// Task 3
alert( 1 && null && 2 ); // null

// Task 4
alert( alert(1) && alert(2) );  // 1 undefined

// Task 5
alert( null || 2 && 3 || 4 ); // 3

// Task 6
let age = Number(prompt("Your age?"), "");
let inRange = (age >= 14 && age <= 90);
alert(`Your age, ${age}, is ${inRange?"":"not "}in range`);

// Task 7
age = Number(prompt("Your age?"), "");
let outOfRange = !(age >= 14 && age <= 90);
alert(`Your age, ${age}, is ${outOfRange?"":"not "}outside range`);
let outOfRange2 = (age < 14 || age > 90);
alert(`Your age, ${age}, is ${outOfRange2?"":"not "}outside range`);

// Task 8
if (-1 || 0) alert( 'first' );  // alert
if (-1 && 0) alert( 'second' ); // no alert
if (null || -1 && 1) alert( 'third' ); // alert