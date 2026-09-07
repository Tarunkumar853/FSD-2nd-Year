// function one(){
//     let user = "Tarun";
//     console.log(this.user);
// }

// one();

// //the value of this
// console.log(this === global); //true
//console.log(this === window); //true

//there are four ways:
//1. simple function call
//2. methods call
//3. constructor call
//4. indirect call

//non-strict mode on browser
// "use strict"
// function Show()
// {
//     console.log(this === window)
// }
// Show();
// window.Show();

//node
// "use strict";
// function Show() {
//     console.log(this === globalThis);
// }

// globalThis.Show = Show;

// Show();
// globalThis.Show();

// function outer() {
//     console.log(this === undefined);

//     function inner(){
//         console.log(this === undefined);
//     }
//     inner();
// }
// outer();

// const person = {
//     name : "arvind",
//     age : 19,
//     greet: function(){
//         return this.name;
//     }
// }

// const student = {
//     name : "tarun",
//     greet: function(){
//         return this.name;
//     }
// }

//bind is a function method that creates and return a new function with a specified value of thisx

// let p1 = person.greet.bind(student);
// console.log(p1());

// function greet(city,country){
//     console.log(`I'm ${this.name} from ${city}, ${country}`);
// }
// const person = {
//     name : "tarun"
// };

// const fn = greet.bind(person, "gzb", "India");
// fn();

// const person ={
//     name : "tarun",
//     greet(){
//         console.log(this.name);
//     }
// };
// setTimeout(person.greet,1000);
// setTimeout(person.greet.bind(person),1000);

//partial application
function multiply(a,b){
    return a*b;
}
const double = multiply.bind();
console.log(double(5,3));