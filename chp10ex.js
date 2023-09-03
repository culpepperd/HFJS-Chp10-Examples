/*
    It's important to see functions as values, too.
*/


/*
// Chp 10 - pg. 449 "Sharpen Your Pencil"
function fun(echo) {
    console.log(echo);
}

fun("hello");

function boo(aFunction) {
    aFunction("boo");
}

boo(fun);

console.log(fun);

fun(boo);

var moreFun = fun;

moreFun("hello again");

function echoMaker() {
    return fun;
}

var bigFun = echoMaker();
bigFun("Is there an echo?");
*/

/*
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
*/

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