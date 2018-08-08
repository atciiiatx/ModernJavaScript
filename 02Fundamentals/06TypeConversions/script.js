"use strict";

/* PLAYGROUND

let value = true;
alert(value);
alert(typeof value);

value = String(value);
alert(typeof value);

let str = "123";
alert(typeof str);

let num = Number(str);
alert(typeof num);

let age = Number("This is a test");
alert(age);

*/

alert("" + 1 + 0);          // "10"
alert("" - 1 + 0);          // -1
alert(true + false);        // 1
alert(6 / "3");             // 2
alert("2" * "3");           // 6
alert(4 + 5 + "px");        // "9px"
alert("$" + 4 + 5);         // "$45"
alert("4" - 2);             // 2
alert("4px" - 2);           // NaN
alert(7 / 0);               // Infinity
alert("  -9\n" + 5);        // " -9\n5"
alert("  -9\n" - 5);        // -14
alert(null + 1);            // 1
alert(undefined + 1);       // NaN