var names = ["Andrew", "Julie", "Jen"];

names.forEach(function (name) {
    console.log("forEach", name);
});

names.forEach((name) => {
    console.log("arrowFunc", name);
});

// if only do one thing, ignore {}, write in one line means return the code after =>.
names.forEach((name) => console.log(name));

// when you use arrow function and define a simple expression
// whatever you defined automatically get returned
var returnMe = (name) => name + "!";
console.log(returnMe("Andrew"));


var person = {
    name: "Andrew",
    greet: function () {
        names.forEach(function (name) {
            // anonomous function: got the "this" binding
            // this.name = undefined
            console.log(this.name + " says hi to " + name);
        });
    }
};

person.greet();

var person2 = {
    name: "Andrew",
    greet: function () {
        names.forEach((name) => {
            // arrow function: got the "parent this" binding
            console.log(this.name + " says hi to " + name);
        });
    }
};

person2.greet();


// Challenge Area
function add (a, b) {
    return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

// addStatement
var addStatement = (a, b) => {
    return a + b;
};
console.log(addStatement(4, 7));

// addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(3, -2));
