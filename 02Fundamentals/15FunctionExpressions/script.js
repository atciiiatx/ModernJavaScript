"use strict";

/* Playground

let sayHi = function() {
    alert( "Hello" );
};
sayHi();
alert(sayHi);

*/

// Task 1
let ask = (question, yes, no) => confirm(question) ? yes() : no();
  
ask(
    "Do you agree?",
    (a, b, c) => alert("You agreed."),
    (a, b, c) => alert("You canceled the execution."));