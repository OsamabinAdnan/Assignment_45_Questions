
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

//call make great function to modify magician name
let great_magicians = make_great(magician_name);

//call show magician function to print each magician name
show_magician(great_magicians);


