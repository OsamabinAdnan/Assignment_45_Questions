// make sure the list of users is not empty
let username = ["Admin", "Hamdan", "Sufiyan", "Arham", "Osman"];
//if the array is not empty
if (username.length === 0) {
    console.log(`"We need to find some users"`);
}
else {
    username.forEach(user => {
        if (user === "Admin") {
            console.log(`"Hello ${user}, would you like to see a status report?"`);
        }
        else {
            console.log(`"Hello ${user}, thank you for logging in again."`);
        }
    });
}
// if the array is empty | If the list is empty, print the message We need to find some users!
username = [];
if (username.length === 0) {
    console.log("We need to find some users!"); //this will be the answer
}
else {
    console.log(`Hello! ${username} how are you today`);
}
export {};
