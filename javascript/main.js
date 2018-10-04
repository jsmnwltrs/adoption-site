import {getPets} from "./data/petData.js"
import {sortEvents} from "./helpers/events.js"

const initializeApp = () => {
    getPets();
    sortEvents();
};

initializeApp();