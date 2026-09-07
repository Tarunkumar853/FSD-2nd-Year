// let str = 'this is multiline string in javascript';

// console.log(str)


// slicing 
// let str1 = "tarun";

// console.log(str1);
// let str2 = "V" + str1.slice(1);
// console.log(str1);
// console.log(str2); 


//comparing string
// console.log('a' < 'A');

// const str1 = 'Hello';
// const str = new String('Hello');


// console.log(str1 == str);
// console.log(str1 === str);

//array example
// const fruit = ["Banana" , "Mango" , "pineapple"];
// const result = fruit.slice(1,3);

// console.log(result);
// console.log(fruit);


//negative index accessing
// const fruit = ["apple" , "banana" , "grapes"];
// const copy = fruit.slice();
// console.log(fruit);
// console.log(copy);
// console.log(copy.slice(-1));
// console.log(copy.slice(-2));


//splice uses
// const arr = [1,2,3,4,5];
// const removed = arr.splice(1,2);
// console.log(removed);
// console.log(arr);

// add element
// const arr = [1,4,5];
// let size = arr.length;
// arr.splice(size,0,2,3,6);
// console.log(arr);


//padstart and padend
// const x = 'javasript';
// console.log(x.padStart(15,'A'));

//unicode and charactercodes
// let x = 'Hello';
// console.log(x.charCodeAt(0));
// console.log(String.fromCharCode(72));

// //for emoji
// const emoji = "🤧";
// console.log(emoji.codePointAt(0));

//string destructuring
// let str1 = "Hello";
// let [a,b,c] = str1;
// console.log([a,b,c]);


//string to array
// const str = "Javascript";
// const arr = [...str];
// console.log(arr);

//eval()
// const str = '2+4'; //primitive 
// const str1 = new String('2+4'); //object
// console.log(eval(str));
// console.log(eval(str1));

//charAt
// const str = "Arvind";
// console.log(str.charAt(1)); //it doesnot print in negative index
// console.log(str.at(-1)); // can access negastive index

//endsWith()
const str = "Hello World";
console.log(str.endsWith("World",5));

//includes
console.log(str.includes("world"));

//indexFrom
console.log(str.indexOf('W' , 0));

//split()
const text = "ABC";

console.log(text.split(""));

//limit
const sentance = "one two three four";
console.log(sentance.split(" ",2))

//string interning means making only one copy in memory for the same strings

