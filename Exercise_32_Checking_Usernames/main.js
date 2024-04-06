//Array of current users
let current_users = ["Osama", "Talha", "Huzafa", "Hamdan", "Sufiyan"];
//Array of new users
let new_users = ["Arham", "Osman", "Adnan", "Osama", "Sufiyan"];
// loop through new_user to check the username availability
new_users.forEach((new_users_one) => {
    //Making a condition to check username exist or not
    let our_condition = current_users.some((current_one_users) => current_one_users.toLowerCase() === new_users_one.toLowerCase());
    //Print message using If/else statement
    if (our_condition) {
        console.log(`"Sorry! username ${new_users_one} is not available, your should enter new username"`);
    }
    else {
        console.log(`"This username ${new_users_one} is available`);
    }
});
export {};
