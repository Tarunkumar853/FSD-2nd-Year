// function display(message)
// {
//     console.log(`hello ${message}`);
// }

// console.log(display("js"));


// function loggedinUser(user)
// {
//     return `${user} just logged in`;
// }

// console.log(loggedinUser('Arvind'));
// console.log(loggedinUser());


// function loggedinUser(user)
// {
//     if (user) {
//         return `${user} just logged in`;
//     }

//     return "Please provide a username";
// }

// console.log(loggedinUser('Arvind'));
// console.log(loggedinUser());

// function loggedinUser(user)
// {
//     return user ? `${user} just logged in` : "Please provide a username";
// }

// console.log(loggedinUser('Arvind'));
// console.log(loggedinUser());

// const person = {
//     name : 'tarun',
//     age : '18'
// };

// function display(person)
// {
//     console.log(`${person.name} and ${person.age}`);
// }

// display(person);
// display({
//     name : 'tarun',
//     age : 18
// });

// function display(arr)
// {
//     console.log(arr[2]);
// }

// display(arr = [10,20,30,40])

// const date = new Date();

// console.log(date.toLocaleDateString('en-US'));
// console.log(date.toLocaleDateString('en-IN'));
// console.log(new Date());

// function loggedinUser(user) {
//     if (user === undefined) {
//         throw new Error("Username is required");
//     }

//     return `${user} just logged in`;
// }

// try {
//     console.log(loggedinUser());
// }
// catch (error) {
//     console.log(error.message);
// }

// function test(a, b, c) {
//     console.log(arguments.length);
// }

// test(10, 20, 30);

function test(...n) {
    console.log(...n);
    console.log(n);
}

test(10, 20, 30);