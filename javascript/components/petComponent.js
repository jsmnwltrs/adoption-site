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
            `<div class="card col-2 m-3" style="width: 18rem;">
            <h5 class="card-title mx-auto">${petsArray[i].name}</h5>
            <img class="card-img" src="${petsArray[i].imageUrl}" alt="Card image cap">
            <div class="card-body">
                <p class="card-text text-center"><strong>Color:</strong> ${petsArray[i].color}</p>
                <p class="card-text text-center"><strong>Special Skill:</strong> ${petsArray[i].specialSkill}</p>
                </div>
                <div class="card-footer text-center font-weight-bold  ${petsArray[i].type}">
                ${petsArray[i].type.toUpperCase()}
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

export {setPets, getPetz, petBuilder, sortPets};