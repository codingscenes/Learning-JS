// Hoisting in js
// var and function are hoisted
//moved to the top
// declaration are moved to top

hello();

var hello = function () {
    console.log("Function Expression!");
}

hello();

function hello() {
    console.log("Function keyword!");
}

hello();