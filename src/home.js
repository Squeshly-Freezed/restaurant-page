import logo from "./img/food3-webp.webp";

const content = document.querySelector(".content");

const logoImage = document.createElement("img");
logoImage.src = logo;

export default function display () {
    content.appendChild(logoImage);
}