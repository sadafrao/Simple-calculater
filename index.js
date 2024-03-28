#! /usr/bin/env node
// shabang
// call inquire
import inquirer from "inquirer";
//  make a variable and ask user stop and put the value
const value = await inquirer.prompt([
    {
        message: "Enter  first number", // show an input  for user
        type: "number",
        name: "firstnumber",
    },
    {
        message: "Enter  second number", // show input2 for uer
        type: "number",
        name: "secondnumber",
    },
    {
        message: "select one of the operators to perform operation", // show an oprator list 
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "multiplication", "Division", "modulus", "Exponentiation", "percentage"],
    },
]);
// conditional statment using if and else statment 
if (value.operator === "Addition") {
    console.log(value.firstnumber + value.secondnumber); // your answer is 2 +3 = 5
}
else if (value.operator === "subtraction") {
    console.log(value.firstnumber - value.secondnumber); // your answer is 6 _ 3 = 3
}
else if (value.operator === "multiplication") {
    console.log(value.firstnumber * value.secondnumber); // your answer is 3 * 4 = 12
}
else if (value.operator === "Division") {
    console.log(value.firstnumber / value.secondnumber); // your answer is 25 / 5 = 5
}
else if (value.operator === "modulus") {
    console.log(value.firstnumber % value.secondnumber); //  if 25 
}
else if (value.operator === "Exponentiation") {
    console.log(value.firstnumber ** value.secondnumber);
}
else if (value.operator === "percentage") {
    console.log((value.firstnumber / value.secondnumber) * 100);
}
else {
    console.log("please select valid operator");
}
;
console.log("The end");
