let fruit = "mango";
let uppercasefruit = "MANGO";
let num1 = 10;
let num2 = 20;
let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
//Tests for equality and inequality with strings
console.log("Is mango equal to mango");
console.log(fruit == "mango");
console.log("\nIs mango is not equal to mango");
console.log(fruit != "mango");
//Tests using the lower case function
console.log("\nIs MANGO (after converting to lowercase) is equal to mango?");
console.log(uppercasefruit.toLocaleLowerCase() == fruit);
console.log("\nIs MANGO (without converting) is equal to mango?");
console.log(uppercasefruit == fruit);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nIn num1 is equal to 10 and num2 is equal to 20?");
console.log(num1 == num2);
console.log("\nIn num1 is not equal to 10 and num2 is equal to 20?");
console.log(num1 != num2);
console.log("\nIn num1 is greater than 5?");
console.log(num1 > 5);
console.log("\nIn num2 is less than 10?");
console.log(num1 < 10);
console.log("\nIn num1 is greater than equal to 10?");
console.log(num1 >= 10);
console.log("\nIn num2 is less than equal to 10?");
console.log(num2 <= 10);
//Tests using "and" and "or" operators
console.log("\nIf num1 is greater than or equal to 10 and num2 is less than or equal to 20");
console.log(num1 >= 10 && num2 <= 20);
console.log("\nIf num1 is greater than or equal to 10 and num2 is less than 20 ");
console.log(num1 >= 10 && num2 < 20);
console.log("\nIf num1 is greater than or equal to 10 'or' num2 is less than to 20");
console.log(num1 >= 10 || num2 < 20);
console.log("\nIf num1 is greater than 10 'or' num2 is less than to 20");
console.log(num1 > 10 || num2 < 20);
//Test whether an item is in a array
console.log("\nIs Karachi is in a array?");
console.log(cities.includes("Karachi"));
console.log("\nIs Quetta is in a array?");
console.log(cities.includes("Quetta"));
//Test whether an item is not in a array
console.log("\nIs Islamabad is not in a array?");
console.log(!cities.includes("Islamabad"));
console.log("\nIs Faisalabad is not in a array?");
console.log(!cities.includes("Faisalabad"));
export {};
