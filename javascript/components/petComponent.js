import {printToDom} from "../helpers/util.js"

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const getPetz = () => {
    return pets;
};

const petBuilder = (petsArray) => {
    let domString = '';
    for (let i = 0; i < petsArray.length; i ++){
        domString += 
            `<div class="card ${petsArray[i].type}" style="width: 18rem;">
            <h5 class="card-title">${petsArray[i].name}</h5>
            <img class="card-img" src="${petsArray[i].imageUrl}" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">Color: ${petsArray[i].color}</p>
                <p class="card-text">Special Skill: ${petsArray[i].specialSkill}</p>
                <p class="card-text">Type: ${petsArray[i].type}</p>
            </div>
          </div>`;
    };
    printToDom(domString, 'pets');
}


const sortPets = (e) => {
    const type = e.target.id;
    if(type === 'all'){
        petBuilder(pets);
    } else {
    const filteredPets = pets.filter(x => x.type === type);
        petBuilder(filteredPets);
}};

const sortEvents = () => {
    const allButton = document.getElementById('all');
    const catButton = document.getElementById("cat");
    const dogButton = document.getElementById("dog");
    const dinoButton = document.getElementById("dino");
    allButton.addEventListener("click", sortPets);
    catButton.addEventListener("click", sortPets);
    dogButton.addEventListener("click", sortPets);
    dinoButton.addEventListener("click", sortPets);
};


export {setPets, getPetz, petBuilder, sortEvents};