import contact from "./img/hours-webp.webp";

const content = document.querySelector(".content");

const contactImage = document.createElement("img");
contactImage.src = contact;

export default function display () {
    content.appendChild(contactImage);
}