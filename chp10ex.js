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