//Creating a function which return a value in string
function city_country(city:string, country:string) : string {
    return `${city}, ${country}`
}

// calling a function and print the return value
console.log(city_country(`"Karachi`, `Pakistan"`));
console.log(city_country(`"Jerusalem`, `Palestine"`));
console.log(city_country(`"Medina`, `Saudi Arabia"`));


