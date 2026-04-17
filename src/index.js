import "./styles.css";
import background from "./img/background-webp.webp";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const mainContainer = document.querySelector(".maincontainer");
mainContainer.style.backgroundImage = `url(${background})`;
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const content = document.querySelector(".content");

const h1 = document.createElement("h1");
h1.innerText = "Koharu Shokudo"
const h2 = document.createElement("h2");
h2.innerText = "こはる食堂";

const homeButton = document.createElement("button");
homeButton.innerText = "Home";
homeButton.addEventListener("click", (event) => {
    clearTab();
    home();
})

const menuButton = document.createElement("button");
menuButton.innerText = "Menu";
menuButton.addEventListener("click", (event) => {
    clearTab();
    menu();
})

const contactButton = document.createElement("button");
contactButton.innerText = "Contact";
contactButton.addEventListener("click", (event) => {
    clearTab();
    contact();
})

nav.appendChild(homeButton);
nav.appendChild(menuButton);
nav.appendChild(contactButton);
header.prepend(h2);
header.prepend(h1);


function clearTab () {
    content.innerText = "";
}

document.addEventListener("DOMContentLoaded", (event) => {
    home();
})