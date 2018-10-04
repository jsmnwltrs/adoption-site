import {getPets} from "./data/petData.js"
import {sortEvents} from "./components/petComponent.js"

const initializeApp = () => {
    getPets();
    sortEvents();
};

initializeApp();