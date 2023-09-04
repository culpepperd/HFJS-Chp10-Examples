/*
    It's important to see functions as values.
    Two ways to create functions: Declaration or Expression
    function declaration() {}
    var expression = function() {}
*/

var numbersArray = [5, 3, 7, 9, 0, 1, 4, 6, 2, 8];
var wordsArray = ["Floof", "Shmoof", "Doof", "Woof", "Alligator"];
numbersArray.sort();
wordsArray.sort();
console.log(numbersArray);
console.log(wordsArray);

/*
// Chp 10 - pg. 453 "Sharpen Your Pencil"
// addN(n) takes one argument, then creates a function that also
// takes an argument, and adds those together. 
function addN(n) {
    var adder = function(x) {
        return n + x;
    };
    return adder;
}

var add2 = addN(2);
console.log(add2(4)); // = 6
console.log(add2(10)); // = 12
console.log(add2(100)); // = 102
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