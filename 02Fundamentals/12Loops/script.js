"use strict";

/* PLAYGROUND

// while
let i = 0;
while (i < 3)
{
    alert(i);
    ++i;
}
      
// do..while
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

// for
for (let i = 0; i < 3; ++i)
{
    alert(i);
}

// labels
outer: 
for (let i = 0; i < 10; ++i)
{
    for (let j = 0; j < 10; ++j)
    {
        if (i > 2 || j > 2)
        {
            break outer;
        }
        alert(String(i) + " " + String(j));
    }
}

*/

// Task 1
let i = 3;
while (i) {
  alert( i-- );
}
// 3 2 1

// Task 2
i = 0;
while (++i < 5) alert( i );
// 1 2 3 4
i = 0;
while (i++ < 5) alert( i );
// 1 2 3 4 5

// Task 7
let num  = Number(prompt("What's your number?", ""));
let divisorFound = false;
for (let primeCandidate = 1; primeCandidate < num; ++primeCandidate)
{
    //alert(primeCandidate);
    divisorFound = false;
    for (let divisor = 2; !divisorFound && (divisor < primeCandidate); ++divisor)
    {
        divisorFound = ((primeCandidate % divisor) === 0);
    }
    if (!divisorFound)
    {
        alert(primeCandidate);
    }
}