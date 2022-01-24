// This varis a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
 let a = 5;
 const b = 10;
 let c = a + b;

console.log("original output:" + c);

a = 20;

console.log("After 'a' has been updated: " + c)

c = a + b;

console.log("After 'c' has been updated to use the new 'a' value: " + c);

function sayHey() {
    console.log( "Hey!");
}


function conversation() {
    sayHey();
    console.log("How are you?");
    console.log("Goodbye");
}



function futureAge(name, age) {
    const futureAge = 30 + 5;
    return "Hi Jackie!" +" you will be " + futureAge + " in 5 years";

}
console.log(futureAge("Jackie",35));
