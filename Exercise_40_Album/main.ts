
//creating the function
function make_album(artist_name:string, album_title:string, tracks?:number ) {
    let album: {artist:string, title:string, tracks?:number} = {
        artist:artist_name,
        title:album_title,
    };
    if (tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}

//calling three function and creating 3 variables with different value
let album1 = make_album("Alan Walker", "Faded");
let album2 = make_album("Edward Maya", "Stereo Love");

//Calling function with third parameter
let album3 = make_album("Adrian Sina", " That's My Name", 10);

//Print value of our object created by function
console.log(album1);
console.log(album2);
console.log(album3);
