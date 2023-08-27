/*
    It's important to see functions as values, too.
*/

// Chp 10 - pg. 440 "Sharpen Your Pencil"
var winner = function() { alert("WINNER!") };
var loser = function() { alert("LOSER!") };

// test
// winner();

// assigning variables for practice
var a = winner;
var b = loser;
var c = loser;

a();
b();

// shell game
c = a;
a = b;
b = c;
c = a; 
a = c;
a = b;
b = c;
a();

/* 
// Chp 10 - pg. 439
// quack() is defined with a function declaration
function quack(num) {
    for (var i = 0; i < num; i++) {
        console.log("Quack!");
    }
}

// fly is defined with a function expression
var fly = function(num) {
    for (var i = 0; i < num; i++){
        console.log("Flying!");
    }
}

var superFly = fly;
superFly(2);

var superQuack = quack;
superQuack(3);
*/