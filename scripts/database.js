 const database = {
     fish:
        [
            {
                image: "./images/alfred.jpeg",
                name: "Alfred",
                species: "Zebra Fish",
                length: "5cm",
                harvested: "Brazil",
                diet: "Worms"
            },
            {
                image: "./images/bob.jpeg",
                name: "Bob",
                species: "Swordtail",
                length: "7cm",
                harvested: "Argentina",
                diet: "Fish food"
            }, 
            {
                image: "./images/charlie.jpeg",
                name: "Charlie",
                species: "Platies",
                length: "4cm",
                harvested: "Brazil",
                diet: "Worms"
            }, 
            {
                image: "./images/dean.jpeg",
                name: "Dean",
                species: "Neon Tetra",
                length: "4cm",
                harvested: "Chile",
                diet: "Butterflies"
            }, 
            {
                image: "./images/ed.jpeg",
                name: "Ed",
                species: "Mollies",
                length: "4cm",
                harvested: "Paraguay",
                diet: "Fish food"
            }, 
            {
                image: "./images/fred.jpeg",
                name: "Fred",
                species: "Guppy",
                length: "6cm",
                harvested: "Colombia",
                diet: "Flies"
            }, 
            {
                image: "./images/george.jpeg",
                name: "George",
                species: "Catfish",
                length: "40cm",
                harvested: "Louisiana",
                diet: "Mud"
            }, 
            {
                image: "./images/harry.jpeg",
                name: "Harry",
                species: "Angel Fish",
                length: "12cm",
                harvested: "Australia",
                diet: "Sea anenome"
            }, 
            {
                image: "./images/indy.jpeg",
                name: "Indy",
                species: "Goldfish",
                length: "8cm",
                harvested: "New York",
                diet: "Bagels"
            }
        ]
    };

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
};
