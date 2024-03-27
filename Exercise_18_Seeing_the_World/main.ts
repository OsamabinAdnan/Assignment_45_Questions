//places which I want to visit
let places: string[] = [
  "Turkey",
  "Saudi Arabia",
  "Palestine",
  "Middle East",
  "Europe",
  "Central Asia",
  "NewZealand",
];
//Print in it original order
console.log("Original Order: ", places);
//Making copy of our array (without modify original array), these three dots used to make copy of original array and sort function will sort them out in alphabetical order
console.log("Alphabetical Order: ", [...places].sort());
//array is in original order
console.log("Still original Order: ", places);
//print array in reverse order without changing original one
console.log("Reverse Order: ", [...places].reverse());
//array is in original order
console.log("Still original Order: ", places);
//make reverse order of your original array
console.log("Original Order Reversed: ", places.reverse());
//again reverse the order of array to show that it back to its original condition
console.log("From Reverse to Original order again: ", places.reverse());
//sort your original array in alphabetical order
console.log("Original Array in Alphabetical Order: ", places.sort());
//sort your original array in reverse alphabetical order
console.log("Original Array in Reverse Alphabetical Order: ", places.reverse());
