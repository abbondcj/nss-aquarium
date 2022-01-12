import { getFish } from "./database.js";

export const fishList = () => {
    let fishes = getFish()

    for (let fish of fishes) {
        htmlString += `<div class="fish">
        <img src="${fish.image}" alt="${fish.name}">
        <h3>${fish.name}</h3>
        <h2>${fish.species}</h2>
        <p>${fish.length}</p>
        <p>${fish.harvested}</p>
        <p>${fish.diet}</p>
    </div>`
    }

    return htmlString
};
