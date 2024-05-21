// IMPORTS
import './style.css';
import Pizza from "../images/pizza.jpeg";

//DOM VARIABLES
let homeButton = document.getElementById('home');
let menuButton = document.getElementById('menu');
let aboutButton = document.getElementById('about');

// content is the scope we will be building the website pages within
let content = document.getElementById('content');










/*
    HOME PAGE LOADER
*/
function loadHome() {
    while(content.lastChild) {
        content.removeChild(content.lastChild);
    }

    // BUILDING HEADER TEXT
    let headerText = document.createElement('h1');
    headerText.textContent = "The Hot Spot";
    content.appendChild(headerText);

    // BUILDING HEADER IMAGE
    let headerImage = new Image();
    headerImage.src = Pizza;
    content.appendChild(headerImage);

    // BUILDING SUBHEADER
    let subHeader = document.createElement('h4');
    subHeader.textContent = "Welcome to The Hot Spot!";
    content.appendChild(subHeader);

    // BUILDING TEXT BLURB
    let text = document.createElement('p');
    text.textContent = "Text"
    content.appendChild(text);
}

/*
    MENU PAGE LOADER
*/
function loadMenu() {
    while(content.lastChild) {
        content.removeChild(content.lastChild);
    }

    // BUILDING HEADER TEXT
    let headerText = document.createElement('h1');
    headerText.textContent = "The Hot Spot";
    content.appendChild(headerText);
}

/*
    ABOUT PAGE LOADER
*/
function loadAbout() {
    while(content.lastChild) {
        content.removeChild(content.lastChild);
    }

    // BUILDING SUBHEADER
    let subHeader = document.createElement('h4');
    subHeader.textContent = "Welcome to The Hot Spot!";
    content.appendChild(subHeader);
}

loadHome();

homeButton.addEventListener('click', () => {
    loadHome();
});

menuButton.addEventListener('click', () => {
    loadMenu();
});

aboutButton.addEventListener('click', () => {
    loadAbout();
});