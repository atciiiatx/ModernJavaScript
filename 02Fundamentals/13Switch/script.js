"use strict";

// Task 1
let browser = prompt("Which browser?", "");
if (browser == 'Edge')
{
      alert( "You've got the Edge!" );
} 
else if (browser == 'Chrome' || browser == 'Firefox' || 
    browser == 'Safari'|| browser == 'Opera')
{
      alert( 'Okay we support these browsers too' );
}
else
{
      alert( 'We hope that this page looks ok!' );
}

// Task 2
let a = +prompt('a?', '');
switch (a)
{
    case 0:
    case 1:
        alert(a);
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
    default:
        break;
}