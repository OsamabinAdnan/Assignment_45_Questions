// Defining a function with rest parameter that accepts items arguments representing our sandwiches
function makesandwiche(...items:string[]) {
console.log("\n Making a sandwiche with following ingredients\n")
items.forEach(item => console.log (item)
);
}
//call the function with 3 times with different argumnets
makesandwiche("Bread", "Spread", "Filling");
makesandwiche("Bread", "Chicken", "Cheese", "vegitable filling", "Condiments");
makesandwiche("Bread", "Peanut Butter with chunks");

