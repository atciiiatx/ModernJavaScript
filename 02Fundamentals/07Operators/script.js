"use strict";

/* PLAYGROUND
let x = 1;
x = -x;
alert(x);

let x = 1, y = 3;
alert(x + y);

alert('1' + 2);
alert(2 + '1');
alert(2 + 2 + "1");
alert('6' / '2');

alert("2" + "1");
alert(+"2" + +"1");

alert (100 % 3);
alert(2 ** 2);
alert(2 ** 5);
alert(2 ** 10);
alert(2 ** 0.5);

let counter = 0;
alert(counter++);
alert(++counter);

let n = 2;
n += 5;
alert(n);

*/

// Task 1
let a = 1, b = 1;
let c = ++a;
let d = b++;
// a=2, b=2, c=2, d=1
alert(String(a) + " " + String(b) + " " + String(c) + " " + String(d));

// Task 2
a = 2;
let x = 1 + (a *= 2);
// a = 4
// x = 5
alert(String(a) + " " + String(x));
