//reverse an array without another array

// let arr = [0, 1, 2, 3, 4];

// for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let name = 'c';

// if(true){
//     let name = 'c++';
//     console.log(name);
// }
// console.log(name);

//using inbuilt object

// const person = new Object();
// person.name = 'c';
// person.age = 45;
// console.log(person.name , person.age);

// using constructor
// function person(name, age){
//     this.name = name;
//     this.age = age;
// }

// const p1 = new person("tarun" , 19);

// console.log(p1.name , p1.age);

//accessing methods
// dot notation 
  // e.g : person.name = ?;

// array notation
    //e.g. person['name']

// const person = {
//     name : "tarun",
//     age : 19,
//     job_type : 'student',
//     company : {
//         id1 : 1,
//         dep : 'CSE'
//     }
// };

// console.log(person.name , person.age , person.job_type);

// console.log(person['name'], person['age'], person['job_type']);

// delete person.name;

// person.company.id = person.company.id1;

// console.log(person.company.id);


// greet function and anonymous function

let person = {
    name : "tarun",
    age : 19,
    job_type : 'student',
}

person.greet = function hello() {
    console.log("Hello my name is : " + this.name);
}

person.greet()
