"use strict";

/*
// Task 1
let user = {};
user.name = "John";
user.surname = "Smith";
alert(user.name + " " + user.surname);
user.name = "Pete";
alert(user.name + " " + user.surname);
delete user.name;
alert(user.name + " " + user.surname);

// Task 2
function isEmpty(sched)
{
    for (let key in sched)
    {
        return false;
    }
    return true;
}
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false


// Task 3
const user = {
    name: "John"
  };
alert(user.name);
// does it work?
user.name = "Pete";
alert(user.name);
// works!


// Task 4
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let key in salaries)
{
    sum += salaries[key];
}
alert("sum = " + sum);

*/

// before the call
function alertMenu(m)
{
    let buffer = "";
    for (let key in m)
    {
        buffer += key + " " + m[key] + " ";
    }
    alert(buffer);
}
function multiplyNumeric(m)
{
    for (let key in m)
    {
        if (typeof m[key] === "number")
        {
            m[key] *= 2;
        }
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
alertMenu(menu);
multiplyNumeric(menu);
alertMenu(menu);