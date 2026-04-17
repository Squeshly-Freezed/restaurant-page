import menu from "./img/menu-webp.webp";

const content = document.querySelector(".content");

const menuImage = document.createElement("img");
menuImage.classList.add("menu-image");
menuImage.alt = "Koharu Shokudo menu featuring Donburi, options include: pork, beef, chicken, salmon, tofu"
menuImage.src = menu;

export default function display () {
    content.appendChild(menuImage);
}