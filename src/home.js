import logo from "./img/logo-webp.webp";

const content = document.querySelector(".content");

const logoImage = document.createElement("img");
logoImage.src = logo;

export default function display () {
    content.appendChild(logoImage);
}