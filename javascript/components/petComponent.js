import {printToDom} from "../helpers/util.js"

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const getPetz = () => {
    return pets;
};

const petBuilder = () => {
    let domString = '';
    for (let i = 0; i < pets.length; i ++){
        domString += 
            `<div class="card" style="width: 18rem;">
            <h5 class="card-title">${pets[i].name}</h5>
            <img class="card-img" src="${pets[i].imageUrl}" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">Color: ${pets[i].color}</p>
                <p class="card-text">Special Skill: ${pets[i].specialSkill}</p>
                <p class="card-text">Type: ${pets[i].type}</p>
            </div>
          </div>`;
    };
    printToDom(domString, 'pets');
}

export {setPets, getPetz, petBuilder};