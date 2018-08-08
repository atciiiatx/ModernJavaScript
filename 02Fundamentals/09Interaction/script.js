"use strict";

/* PLAYGROUND

alert('Hello');

let defaultAge = 35;
let age = prompt('How old are you?', defaultAge);
if (age === null)
{
    age = defaultAge;
}
alert(`You are ${age} years old!`);

let isBoss = confirm("Are you the Boss?");
alert(isBoss);

*/

// Task 1
let defaultName = "DEFAULT";
let name = prompt("What is your name?", defaultName);
if (name === null)
{
    name = defaultName;
}
alert(`Your name is ${name}`);