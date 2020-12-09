import {lorem} from "./utils/lorem.js";

const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const loremButton = document.getElementById('loadLoremBtn');

{
    addLoremButtonEventListener();
}

function addLoremButtonEventListener() {
    loremButton.addEventListener('click', addLorem);
}

export function addLorem() {
    main.innerHTML = lorem;
}