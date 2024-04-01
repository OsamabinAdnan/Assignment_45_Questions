let age = 35;
let personName = "Osman";
if (age >= 0 && age < 2) {
    console.log(`"${personName} is Baby"`);
}
else if (age >= 2 && age < 4) {
    console.log(`"${personName} is Toddler"`);
}
else if (age >= 4 && age < 13) {
    console.log(`"${personName} is Kid"`);
}
else if (age >= 13 && age < 20) {
    console.log(`"${personName} is Teenager"`);
}
else if (age >= 20 && age < 65) {
    console.log(`"${personName} is Adult"`);
}
else if (age >= 65) {
    console.log(`"${personName} is Elder"`);
}
export {};
