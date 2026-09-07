//anonymous function
// const res = function (a,b){
//     return a+b;
// }
// console.log(res());

// console.log(one(2));
// function one(n)
// {
//     return (n+1);
// }

// console.log(two(5));        //this function gives error cause const name is hoisted.
// const two = function(n){
//     return n+2;
// }

// setTimeout(function() {     //for delay the function invoking
//     console.log('CSE-34');
// }, 3000);

//iife = immediately invoked functional expression
//this is named iife
// (function one() {
//     console.log('Hello');
// }) ();

// //anonymous iife
// (function () {
//     console.log('Database Connected');
// })()

// //this 
// const person = {
//     name : 'tarun',
//     age : 18,
//     greet : function (){
//         console.log(`${this.name} ${this.age}`)
//     }
// };

// here this is call inside a object acc. to context and here this === person

// person.greet();
// person.name = 'arvind';
// person.age = 30;
// person.greet();

// console.log(person);



//this gives the global properties
// function show() {
        
//     console.log(this);
// }

// show();

//this gives the 
const person = {
    name : 'ABC',
    age : 44,
    greet : function(){
        console.log(this);
    }
};

person.greet();
console.log(this); //it taking the global o0bject that's why it getting blank object or empty.