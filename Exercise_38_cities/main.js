//Making function
function describe_cities(city, country = "Pakistan") {
    console.log(`"${city} is in ${country}"`);
}
//Calling function
describe_cities("Karachi");
describe_cities("Lahore");
describe_cities("Makkah", "Saudi Arabia");
export {};
