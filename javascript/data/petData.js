import {setPets, getPetz} from "../components/petComponent.js"

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);    
    setPets(data.pets);   
    console.log(getPetz());               
    // petsBuilder(getPets());
};

function executeThisCodeIfXhrFails () {
    console.log("shit broke");
};

const getPets = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    myRequest.addEventListener("error", executeThisCodeIfXhrFails);
    myRequest.open("GET", "./db/pets.json");  
    myRequest.send();
};

export {getPets};