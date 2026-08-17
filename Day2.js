// let a = 100;
// let b = 20;

// let z;


// // [a,b] = [b,a]; // Destrucing Assignment

// console.log("a =" , a);
// console.log("b =", b);

// if (a < 15)
//     z = 30;

// console.log(a,b,z);


//check a year is leap year or not

let x = 2054;

//nested if else 
// if ((x%100 == 0))
// {
//     if(( x % 400 == 0 ))
//     {
//         console.log(x + " is a leap year");
//     }
//     else
//         console.log(x + " is not a leap year");
// }
// else {
//     if(x%4 == 0)
//         console.log(x + " is a leap year");
//     else
//         console.log(x + " is not a leap year");
// }

//logical operator
// if((x%400 == 0) || (x%4 == 0 && x%100 != 0))
// {
//     console.log(x + " is a leap year")
// }
// else
//     console.log(x + " is not a leap year")

//terniary operator

// (x%400 == 0) || ((x%4 == 0) && (x%100 != 0)) ? console.log(x+" is a leap year") : console.log(x+" is not a leap year");

//nested terniary operator
// (x%100 == 0) ? ((x%400 == 0) ? console.log(x+"is a leap year") : console.log(x+"is not a leap year") ): (x%4 == 0) ? console.log(x+" is a leap year") : console.log(x+"is not a leap year");

//switch case
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a number (1-7): ", (input) => {
//     const b = Number(input);

// switch(b)
// {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break
//     case 7:
//         console.log("Saturday");
//         break
//     default:
//         console.log("Sunday");
// }

//     rl.close();
// });

//factorial;
// let ans = 1;
// for(let x = 10; x>0; x--)
// {
//     ans = ans*x;
// }
// console.log(ans);

//fibonaci series
let answ = 1;
for(let y = 0; y<100; y++)
{
    answ = answ + y; 
    console.log(ans);
}




