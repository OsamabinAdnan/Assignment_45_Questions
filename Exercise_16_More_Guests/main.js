//Old Guests list
let guests = ["Hamdan", "Sufiyan", "Osman", "Arham"];
// remove guest from list who is not coming
let notcoming = guests[0];
//print who is not coming
console.log(notcoming, "is not coming");
//replace guest from list
guests.splice(0, 1, "Huzaifa");
//good news bigger table has arranged
console.log("Good News! we have successfully arranged bigger table for dinner");
// adding new guest name at the start of array
guests.unshift("Ali");
//adding new guest name at the end of array
guests.push("Aamir");
// get a middle index of our guest list array
let middleindex = (guests.length / 2);
//adding a new guest at the middle index of array
guests.splice(middleindex, 0, "Affan");
//print message of updated guest list
console.log("Updated list of guest");
//sending a invitation message to our updated list guest
guests.forEach(newguest => console.log(`"Hello ${newguest}, you are invited for a dinner with me tomorrow at 8 PM"`));
export {};
