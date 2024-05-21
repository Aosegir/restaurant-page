// IMPORTS
import './style.css';
import Pizza from "../images/pizza.jpeg";

// MENU IMPORTS
import Menu0 from '../images/menu/menu-0.png';
import Menu1 from '../images/menu/menu-1.png';
import Menu2 from '../images/menu/menu-2.png';
import Menu3 from '../images/menu/menu-3.png';
import Menu4 from '../images/menu/menu-4.png';
import Menu5 from '../images/menu/menu-5.png';
import Menu6 from '../images/menu/menu-6.png';
import Menu7 from '../images/menu/menu-7.png';

//ABOUT IMPORTS
import Founder from '../images/about/founder.png';
import Phone from '../images/about/phone.png';
import Email from '../images/about/email.png';
import Car from '../images/about/car.png';

//DOM VARIABLES
let homeButton = document.getElementById('home');
let menuButton = document.getElementById('menu');
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
    //DIV BUILDERS
    let contentDiv = document.createElement('div');
    let leftDiv = document.createElement('div');
    let rightDiv = document.createElement('div');

    //LEFT DIV
    leftDiv.classList.add('flex', 'single');
    let homeImage = new Image();
    homeImage.src = Pizza;
    leftDiv.appendChild(homeImage);

    //RIGHT DIV
    rightDiv.classList.add('flex', 'column', 'main-center', 'cross-center', 'double');
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
    // CONTENT DIV
    let contentDiv = document.createElement('div');
    contentDiv.classList.add('grid');

    // ITERATING OVER GRID
    for(let i = 0; i < 8; i++) {
        // GRID ITEM
        let gridItem = document.createElement('div');
        gridItem.classList.add('flex', 'column', 'cross-center', 'menu-border');

        // IMAGE
        let itemImage = new Image();
        itemImage.classList.add('contain');

        // TEXT
        let textContent = document.createElement('div');
        let itemName = document.createElement('h4');
        let itemDesc = document.createElement('p');

        switch(i) {
            case 0:
                itemImage.src = Menu0;
                itemName.textContent = "Pepperoni Pizza";
                itemDesc.textContent = "You know it, you love it!";
                break;
            case 1:
                itemImage.src = Menu1;
                itemName.textContent = "Cheese Pizza";
                itemDesc.textContent = "Who can go wrong with the classic?";
                break;
            case 2:
                itemImage.src = Menu2;
                itemName.textContent = "Meat Lover's Pizza";
                itemDesc.textContent = "For the carnivore in you.";
                break;
            case 3:
                itemImage.src = Menu3;
                itemName.textContent = "Veggie Pizza";
                itemDesc.textContent = "When you want to be healthy, but still order pizza.";
                break;
            case 4:
                itemImage.src = Menu4;
                itemName.textContent = "Ultimate Pizza";
                itemDesc.textContent = "Ultimate meat and ultimate veg. The best of both.";
                break;
            case 5:
                itemImage.src = Menu5;
                itemName.textContent = "Hawaiian Pizza";
                itemDesc.textContent = "You know what you like, and I respect that!";
                break;
            case 6:
                itemImage.src = Menu6;
                itemName.textContent = "Neapolitan Pizza";
                itemDesc.textContent = "You're either classy or like ice cream!";
                break;
            case 7:
                itemImage.src = Menu7;
                itemName.textContent = "BBQ Chicken Pizza";
                itemDesc.textContent = "So fresh, it might walk off the plate!";
                break;
            default:
                alert("Error! Something went wrong!");
                break;
        };

        gridItem.appendChild(itemImage);
        textContent.appendChild(itemName);
        textContent.appendChild(itemDesc);
        gridItem.appendChild(textContent);
        contentDiv.appendChild(gridItem);
    }
    contentDiv.id = "menu-grid";

    content.appendChild(contentDiv);
}

/*
    ABOUT PAGE LOADER
*/
function loadAbout() {
    /*
        3 divs each taking up 1/3 of the page
            first div: lorem ipsum personal history text
            2nd div: picture of owner
            3rd div: phone #, email, address
    */

    // CREATING DIVS
    let contentDiv = document.createElement('div');
    let leftDiv = document.createElement('div');
    let middleDiv = document.createElement('div');
    let rightDiv = document.createElement('div');

    contentDiv.classList.add('flex');

    // LEFT DIV
    leftDiv.classList.add('flex', 'column', 'single');
    
    let leftDivTitle = document.createElement('h2');
    leftDivTitle.textContent = "Our History";
    
    let leftDivContent = document.createElement('p');
    leftDivContent.textContent = "A long time ago, in a galaxy far, far away, a man was born. Born without arms at the tender age of 62, Mario Mario knew he was destined for pizzas.";
    
    leftDiv.appendChild(leftDivTitle);
    leftDiv.appendChild(leftDivContent);

    
    // MIDDLE DIV
    middleDiv.classList.add('flex', 'column', 'single');
    
    let middleDivImg = new Image();
    middleDivImg.classList.add('founder-img');
    middleDivImg.src = Founder;

    let middleDivTitle = document.createElement('h2');
    middleDivTitle.textContent = "The Doughfather, Cabanela Mario";

    middleDiv.appendChild(middleDivImg);
    middleDiv.appendChild(middleDivTitle);

    // RIGHT DIV
    rightDiv.classList.add('flex', 'column', 'single');

        // PHONE NUMBER
    let phoneDiv = document.createElement('div');
    phoneDiv.classList.add('flex');

    let phoneIcon = new Image();
    phoneIcon.classList.add('about-icon');
    phoneIcon.src = Phone;

    let phoneText = document.createElement('p');
    phoneText.textContent = "Our number: (760) 717-3521";

    phoneDiv.appendChild(phoneIcon);
    phoneDiv.appendChild(phoneText);

        // EMAIL ADDRESS

    let emailDiv = document.createElement('div');
    emailDiv.classList.add('flex');

    let emailIcon = new Image();
    emailIcon.classList.add('about-icon');
    emailIcon.src = Email;

    let emailText = document.createElement('p');
    emailText.textContent = "Our e-mail address: pizzagirl223@nasa.gov";

    emailDiv.appendChild(emailIcon);
    emailDiv.appendChild(emailText);

        // PHYSICAL ADDRESS

    let addressDiv = document.createElement('div');
    addressDiv.classList.add('flex');

    let addressIcon = new Image();
    addressIcon.classList.add('about-icon');
    addressIcon.src = Car;

    let addressText = document.createElement('p');
    addressText.textContent = "Our address: 1026 Monique Court, Fallbrook, CA, 92084";

    addressDiv.appendChild(addressIcon);
    addressDiv.appendChild(addressText);

    rightDiv.appendChild(phoneDiv);
    rightDiv.appendChild(emailDiv);
    rightDiv.appendChild(addressDiv);


    // APPENDING 
    contentDiv.appendChild(leftDiv);
    contentDiv.appendChild(middleDiv);
    contentDiv.appendChild(rightDiv);
    content.appendChild(contentDiv);
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

aboutButton.addEventListener('click', () => {
    clearPage();
    loadAbout();
});