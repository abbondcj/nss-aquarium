import { database } from "./database.js";



const populate = () => {

    let displayFish = document.getElementById("fishesContainer");
    let newArray = database.fish.map(fish => {
        return fish;
    });

    let htmlString = `<div class="fishListContainer">`;

    for (const fishes of newArray) {
        htmlString+=`
        <div class="fishCard">
            <img src="${fishes.image}" alt="${fishes.name}">
            <h3>${fishes.name}</h3>
            <p>Species: ${fishes.species}</p>
            <p>Length: ${fishes.length}</p>
            <p>Harvested: ${fishes.harvested}</p>
            <p>Diet: ${fishes.diet}</p>
        </div>`
    };

    htmlString+=`</div>`;
    displayFish.innerHTML=htmlString;
};

populate();