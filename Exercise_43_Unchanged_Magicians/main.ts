//defining a function to print each magician name fron an array
function show_magician(magician:string[]) {
    magician.forEach(name => console.log(name)
    )
}

//Create function to make magicians great through map(), it will modify array
function make_great(magician:string[]) {
    return magician.map(name => `"The Great ${name}"`);
}

// defining an array having magician name
let magician_name = ["Harry Houdini", "David Copperfield", "David Blaine", "Uri Geller"];

//Making a copy of original array through slice function
let copy_magicians_name = magician_name.slice();

//Modify the copied array to include 'the great' with their names
let copy_great_magicians = make_great(copy_magicians_name);

//Showing both arrays original and copied
//Original array
console.log ("\nOriginal Array\n");
show_magician(magician_name);
//Copied array
console.log ("\nCopied Array\n");
show_magician(copy_great_magicians);

