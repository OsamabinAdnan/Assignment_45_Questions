//Old Guests list
let guests = ["Hamdan", "Sufiyan", "Osman", "Arham"];

// remove guest from list who is not coming
let notcoming = guests[0];

//print who is not coming
console.log(notcoming, "is not coming");

//replace guest from list
guests.splice (0,1,"Huzaifa");

//good news bigger table has arranged
console.log("Good News! we have successfully arranged bigger table for dinner");

// adding new guest name at the start of array
guests.unshift("Ali");

//adding new guest name at the end of array
guests.push("Aamir");

// get a middle index of our guest list array
let middleindex: number = (guests.length/2);

//adding a new guest at the middle index of array
guests.splice(middleindex,0,"Affan");
//print message of updated guest list
console.log( "Updated list of guest");
//sending a invitation message to our updated list guest
guests.forEach(newguest => console.log(`"Hello ${newguest}, you are invited for a dinner with me tomorrow at 8 PM"`));

//Print msg to inform that you can invite only 2 peoples

console.log("Unfortunately! new dinner table won’t arrive in time for the dinner, so I can invite only 2 peoples for dinner with me");

// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`"Very Sorry to inform you, ${removedGuest} I can’t invite you to dinner due to unavailability of big table"`)
}
//sending new invitation for remaining 2 guests in the list
console.log("Invitation for last 2 person in the list");
guests.forEach(last2 => console.log(`Luckily ${last2}! You are still invited for dinner with me`)
    )
// removing the last 2 guests from the list
guests.pop();
guests.pop();
console.log("Empty list:", guests );

