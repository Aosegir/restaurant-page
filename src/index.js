import './style.css';
import Autumn from "../images/autumn.jpg";

// content is the scope we will be building the website page within
let content = document.getElementById('content');

// BUILDING HEADER TEXT
let headerText = document.createElement('h1');
headerText.textContent = "The Autumn Night";
content.appendChild(headerText);

// BUILDING HEADER IMAGE
let headerImage = new Image();
headerImage.src = Autumn;
content.appendChild(headerImage);

// BUILDING SUBHEADER
let subHeader = document.createElement('h4');
subHeader.textContent = "Welcome to The Autumn Night!";
content.appendChild(subHeader);

// BUILDING TEXT BLURB
let text = document.createElement('p');
text.textContent = "This restaurant seeks to bring the wonders of the season right to your doorstep. Please feel free to browse our selection until you find something that matches your appetites. You can be sure that you'll never be disappointed!"
content.appendChild(text);