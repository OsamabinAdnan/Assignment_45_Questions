
//defining a function to print each magician name fron an array
function show_magician(magician:string[]) {
    magician.forEach(name => console.log(name)
    )
}

// defining an array having magician name
let magician_name = ["Harry Houdini", "David Copperfield", "David Blaine", "Uri Geller"];

//call the function to print each magician name
show_magician(magician_name);
