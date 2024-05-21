// IMPORTS
import './style.css';
import Pizza from "../images/pizza.jpeg";

//DOM VARIABLES
let homeButton = document.getElementById('home');
let menuButton = document.getElementById('menu');
let specialsButton = document.getElementById('specials');
let aboutButton = document.getElementById('about');

// content is the scope we will be building the website pages within
let content = document.getElementById('content');







/*
    CLEAR PAGE FUNCTION
*/
function clearPage() {
    while(content.lastChild) {
        content.removeChild(content.lastChild);
    };
};

/*
    HOME PAGE LOADER
*/
function loadHome() {
    /*
        div to contain everything
            subdiv to contain image on left 3rd of screen
                image  (pizza slice)
            subdiv to contain history text on right 2/3rds of screen
                title header
                lorem ipsum history 
    */

    //DIV BUILDERS
    let contentDiv = document.createElement('div');
    let leftDiv = document.createElement('div');
    let rightDiv = document.createElement('div');

    //LEFT DIV
    leftDiv.classList.add('flex');
    leftDiv.classList.add('single');
    let homeImage = new Image();
    homeImage.src = Pizza;
    leftDiv.appendChild(homeImage);

    //RIGHT DIV
    rightDiv.classList.add('flex');
    rightDiv.classList.add('column');
    rightDiv.classList.add('main-center');
    rightDiv.classList.add('cross-center');
    rightDiv.classList.add('double');
    let homeHeader = document.createElement('h1');
    homeHeader.textContent = 'Welcome to The Hot Spot!';
    rightDiv.appendChild(homeHeader);

    let history = document.createElement('p');
    history.textContent = "This is a brief overview of the history of the Hot Spot, from our founder's fight in the War of 1812 to our revolutionary discovery of ancient dough-kneading techniques recovered from a pharoah's tomb by my Great-Aunt Birget.";
    rightDiv.appendChild(history);

    //CONTENT DIV
    contentDiv.classList.add('flex');
    contentDiv.appendChild(leftDiv);
    contentDiv.appendChild(rightDiv);

    content.appendChild(contentDiv);
}

/*
    MENU PAGE LOADER
*/
function loadMenu() {
    // BUILDING HEADER TEXT
    let headerText = document.createElement('h1');
    headerText.textContent = "The Hot Spot";
    content.appendChild(headerText);
}

/*
    SPECIALS PAGE LOADER
*/
function loadSpecials() {
    // BUILDING TEXT BLURB
    let text = document.createElement('p');
    text.textContent = "Text"
    content.appendChild(text);
}

/*
    ABOUT PAGE LOADER
*/
function loadAbout() {
    // BUILDING SUBHEADER
    let subHeader = document.createElement('h4');
    subHeader.textContent = "Welcome to The Hot Spot!";
    content.appendChild(subHeader);
}

loadHome();

homeButton.addEventListener('click', () => {
    clearPage();
    loadHome();
});

menuButton.addEventListener('click', () => {
    clearPage();
    loadMenu();
});

specialsButton.addEventListener('click', () => {
    clearPage();
    loadSpecials();
});

aboutButton.addEventListener('click', () => {
    clearPage();
    loadAbout();
});