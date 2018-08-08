"use strict";

/* PLAYGROUND

alert(2 > 1);
alert(1 > 2);
alert(2 == 1);
alert(2 != 1);

alert('Z' > 'A');
alert('A' == 'a');
alert('A' != 'a');
alert('A' > 'a');
alert('A' < 'a');

let a = 0;
let b = "0";
alert("a == b: " + (a == b));
alert("a === b: " + (a === b));

*/

alert('5 > 4:' +  (5 > 4));                                 // true
alert('"apple" > "pineapple":' + ("apple" > "pineapple"));  // false
alert('"2" > "12":' + ("2" > "12"));                        // true
alert('undefined == null:' + (undefined == null));          // true
alert('undefined === null:' + (undefined === null));        // false
alert('null == "\n0\n":' + (null == "\n0\n"));              // false
alert('null === +"\n0\n":' + (null === +"\n0\n"));          // false