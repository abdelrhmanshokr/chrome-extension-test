// manifest is the main coniguration file for this project 

// an array of links to all images we need to swap with 
let ironManImanges = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3gKM3ALr2dg-aQfys-TH6jWJ6QFTB6cfLQ&usqp=CAU" 
];


// so mainly we wanna change the src of all images tags in the DOM to the link above that's it
// it's like web scraping in a way 
const images = document.getElementsByTagName("img");

for(image of images){
    image.src = ironManImanges[0];
}


