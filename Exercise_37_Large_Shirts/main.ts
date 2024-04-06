//Making a funtion

function make_shirt(size:string = "large", message:string = "I love Typescript") {
    console.log(`"I got a '${size}' t-shirt with a message '${message}' printed on it"`);
}

//Calling a function with default size and message
make_shirt();

//calling a function with custom size and default message
make_shirt("medium");

//call function with custom size and custom message
make_shirt("small","Coding is fun");
