//Make a array of five or more usernames

let username:string[] = ["admin", "hamdan", "sufiyan", "arham", "osman"];

//If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

username.forEach(user =>{
    if (user === "admin") {
        console.log (`"Hello ${user}, would you like to see a status report?"`);
    } 
//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

    else {
        console.log (`"Hello ${user}, thank you for logging in again."`);    
    } 
})    
