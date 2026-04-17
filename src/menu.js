import menu from "./img/menu-webp.webp";

const content = document.querySelector(".content");

const menuImage = document.createElement("img");
menuImage.classList.add("menu-image");
menuImage.src = menu;

export default function display () {
    content.appendChild(menuImage);
}