// import modules
import { getFish } from "./database.js";
import { fishList } from "./fish.js";


// store all the fish objects from the database in a variable
let allFish = getFish();
for (let fish of allFish) {
    console.log(fish)
};

// render the fish cards html in the body 
let parentHtml = document.getElementById("container");
parentHtml.innerHTML = getFish();